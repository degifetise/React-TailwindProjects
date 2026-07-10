import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client directly in the browser using the Vite env variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

export default function StudyAssistantCore() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I am your serverless Gemini study assistant. What topic or coding logic are we breaking down today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    // 1. Add user message to state array container
    const userMessage = prompt;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setPrompt("");
    setIsLoading(true);

    try {
      // 2. Direct browser-to-Google API handshake
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", // Fast, lightweight model perfect for browser apps
        contents: userMessage,
        config: {
          systemInstruction: `You are an expert academic tutor. 
          Break down complex engineering or technical topics into clean, scannable structures.
          Use bold phrases, bullet points, and clean code blocks where applicable.`,
        },
      });

      // 3. Update UI state with the text response from Google
      setMessages((prev) => [...prev, { role: "ai", text: response.text }]);
    } catch (error) {
      console.error("Gemini Frontend Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "⚠️ Failed to connect to Gemini. Verify your VITE_GEMINI_API_KEY configuration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#262626] shadow-xl overflow-hidden flex flex-col h-[550px]">
      {/* Top Meta Status Indicator */}
      <div className="p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1C1C1C] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-xl">⚡</span>
          <div>
            <h3 className="font-mono font-bold text-xs text-slate-800 dark:text-white">
              DIRECT BROWSER CLIENT ROUTE
            </h3>
            <p className="text-[10px] text-emerald-500 font-mono">
              Status: Connected to gemini-2.5-flash
            </p>
          </div>
        </div>
      </div>

      {/* Message Output Tray */}
      <div className="flex-1 p-6 appearance-none overflow-y-auto space-y-4 bg-slate-50/30 dark:bg-[#151515]/20">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                msg.role === "user"
                  ? "bg-emerald-500 text-white rounded-br-none"
                  : "bg-white dark:bg-[#2A2A2A] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#2A2A2A] border border-slate-200 dark:border-white/5 p-4 rounded-xl rounded-bl-none text-xs text-slate-400 font-mono animate-pulse">
               Querying Google Core Matrix...
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Form Input */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#262626] flex gap-3"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything (e.g., Explain React useEffect cleanup layout...)"
          disabled={isLoading}
          className="flex-1 px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1C1C1C] text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50 disabled:opacity-60 transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-mono font-bold transition-all duration-150 disabled:opacity-50"
        >
          EXECUTE
        </button>
      </form>
    </div>
  );
}
