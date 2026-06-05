import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X } from "lucide-react";

export default function ChatWithAI() {
  const [showChat, setShowChat] = useState(false);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scrolls chat panel to bottom when new words or messages stream in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async () => {
    if (!file && !text.trim()) return;

    // Construct the user message object
    const userMessage = {
      role: "user",
      content: text || `Uploaded file: ${file.name}`,
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    let inputText = text;
    if (file) inputText = `[User Uploaded File: ${file.name}]\n\n${text}`;

    // Reset input states right away for clean UX
    setText("");
    setFile(null);

    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          },
          body: JSON.stringify({
            model: "Qwen/Qwen2.5-72B-Instruct",
            messages: [
              { role: "system", content: "You are a helpful study assistant." },
              { role: "user", content: inputText },
            ],
            max_tokens: 500,
          }),
        },
      );

      const data = await res.json();

      if (data.choices && data.choices.length > 0) {
        const fullText = data.choices[0].message.content;
        const words = fullText.split(" ");
        let index = 0;

        // Initialize empty AI message placeholder to prevent concatenation jumping
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        const interval = setInterval(() => {
          setMessages((prev) => {
            const updated = [...prev];
            const lastMsg = updated[updated.length - 1];

            if (lastMsg && lastMsg.role === "assistant") {
              // Smoothly space out words during state reconstruction
              lastMsg.content =
                lastMsg.content === ""
                  ? words[index]
                  : lastMsg.content + " " + words[index];
            }
            return updated;
          });

          index++;
          if (index >= words.length) {
            clearInterval(interval);
            setLoading(false);
          }
        }, 40); // Sped up interval slightly to 40ms for slicker response stream
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "⚠️ API Error: Unable to extract content response.",
          },
        ]);
        setLoading(false);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ System connection error: " + err.message,
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="z-50">
      {/* Floating Action Launch Trigger */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 z-50"
        >
          <MessageCircle className="w-5 h-5" /> Chat with AI
        </button>
      )}

      {/* Flyout Sidebar Chat Panel */}
      <div
        className={`fixed bottom-0 top-0 right-0 w-full sm:w-[460px] bg-slate-900 border-l border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          showChat ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {showChat && (
          <section className="flex flex-col h-full relative p-5">
            {/* Header / Dismiss Action */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h2 className="text-lg font-bold text-white">
                Study <span className="text-cyan-400">Assistant</span>
              </h2>
              <button
                onClick={() => setShowChat(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Message Window */}
            <div className="flex-1 overflow-y-auto rounded-xl p-4 bg-slate-950 border border-slate-800 space-y-4 mb-4 custom-scrollbar">
              {messages.length === 0 && (
                <p className="text-center text-sm text-slate-500 mt-8">
                  Send a text message or load up notes to begin learning.
                </p>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[85%] text-sm whitespace-pre-wrap break-words shadow-sm ${
                    msg.role === "user"
                      ? 
                        "bg-blue-600 text-white ml-auto rounded-tr-none"
                      : 
                        "bg-slate-800 text-slate-100 mr-auto rounded-tl-none border border-slate-700"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {loading && (
                <div className="p-3 rounded-xl max-w-[40%] bg-slate-800 border border-slate-700 text-slate-400 mr-auto rounded-tl-none animate-pulse flex items-center gap-1 text-sm">
                  Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Actions */}
            <div className="space-y-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your notes..."
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
                rows="3"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="chat-file-upload"
                  accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
                <label
                  htmlFor="chat-file-upload"
                  className={`flex-1 truncate text-center text-xs p-2.5 rounded-lg border border-dashed border-slate-700 cursor-pointer transition ${
                    file
                      ? "bg-cyan-950/40 text-cyan-400 border-cyan-500"
                      : "bg-slate-950 text-slate-400 hover:text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {file ? `📎 ${file.name}` : "Attach Document"}
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={loading || (!text.trim() && !file)}
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed h-full"
                >
                  <Send className="w-3.5 h-3.5" /> Send
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
