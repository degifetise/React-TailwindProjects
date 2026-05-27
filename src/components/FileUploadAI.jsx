import { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";

export default function ChatWithAI() {
  const [showChat, setShowChat] = useState(false);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file && !text.trim()) return;

    const userMessage = { role: "user", content: text || file.name };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    let inputText = text;
    if (file) inputText = `Uploaded file: ${file.name}`;

    try {
      const res = await fetch("https://api.puter.com/v1/ai/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful study assistant." },
            { role: "user", content: inputText },
          ],
        }),
      });

      const data = await res.json();
      const fullText = data.choices[0].message.content;

      let index = 0;
      const words = fullText.split(" ");
      const interval = setInterval(() => {
        setMessages((prev) => {
          const lastMsg = prev[prev.length - 1];
          if (lastMsg?.role === "assistant") {
            const updated = [...prev];
            updated[updated.length - 1].content += " " + words[index];
            return updated;
          } else {
            return [...prev, { role: "assistant", content: words[index] }];
          }
        });

        index++;
        if (index >= words.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 80);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error: " + err.message },
      ]);
      setLoading(false);
    }

    setText("");
    setFile(null);
  };

  return (
    <div className="fixed min-h-screen bg-slate-950">
      {/* Floating button at bottom-right */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle className="w-5 h-5" /> Chat with AI
        </button>
      )}

      {/* Sidebar chat panel */}
      <div
        className={`fixed bottom-0 top-20 right-0 w-full sm:w-[480px] bg-slate-800 shadow-lg transition-transform duration-500 ease-in-out ${
          showChat ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {showChat && (
          <section className="flex flex-col h-full relative p-6">
            {/* Close button */}
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <h2 className="text-xl font-bold text-white mb-4">
              Chat With <span className="text-cyan-400">AI</span>
            </h2>

            {/* Chat window */}
            <div className="flex-1 overflow-y-auto border rounded-lg p-4 bg-slate-900 mb-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-900 ml-auto"
                      : "bg-gray-100 text-gray-800 mr-auto"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="mb-3 p-3 rounded-lg max-w-[80%] bg-gray-200 text-gray-600 mr-auto animate-pulse">
                  Thinking...
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="flex flex-col gap-3">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your notes..."
                className="w-full border rounded-lg p-3 text-sm text-gray-700"
                rows="3"
              />

              <input
                type="file"
                accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
                onChange={(e) => setFile(e.target.files[0])}
                className="block w-full text-sm text-gray-500 border rounded-lg p-2"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
