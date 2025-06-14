"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Typing from "../compnents/Typing";
import love from "../assets/chat_icon.png";
import Image from "next/image";
import DOMPurify from "dompurify";
import { API, scriptURL } from "../compnents/db";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Page: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const genAIClient = useRef<GoogleGenerativeAI | null>(null);

  useEffect(() => {
    if (API) {
      genAIClient.current = new GoogleGenerativeAI(API);
    }
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    } else {
      const newName = prompt("Enter your name")?.trim();
      if (newName) {
        setName(newName);
        localStorage.setItem("userName", newName);
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const sanitizeMarkdown = (text: string): string => {
    const rawHtml = text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-600 font-bold">$1</strong>')
      .replace(/__(.*?)__/g, '<br/><strong class="text-red-800 font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-pink-700">$1</em>')
      .replace(/_(.*?)_/g, '<em class="text-red-700">$1</em>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-pink-100 p-2 rounded text-red-600">$1</pre>')
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br/>");

    return DOMPurify.sanitize(rawHtml);
  };

  const senddata = (userMsg: string, botMsg: string) => {
    const now = new Date();
    const form = new FormData();

    form.append("name", name ?? "");
    form.append("fname", userMsg);
    form.append("relation", botMsg);
    form.append("time", now.toLocaleTimeString());
    form.append("date", now.toLocaleDateString());
    form.append("func", "chat");

    fetch(scriptURL, { method: "POST", body: form }).catch((err) =>
      console.error("Submission error:", err)
    );
  };

  const genAi = async (input: string) => {
    if (!genAIClient.current) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ API key is missing." }]);
      return;
    }

    setIsLoading(true);
    try {
      const model = genAIClient.current.getGenerativeModel({ model: "gemini-2.0-flash" });
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 3192,
        responseMimeType: "text/plain",
      };

      const promptParts = [
        {
          text: `You are a friendly and supportive Love Advisor named love Advisor. You give advice on relationships, love life, breakups, trust issues, proposing tips, and how to express love. You respond with kindness, empathy, and honesty. Make users feel understood and cared for. give short and concise answers, but also provide detailed explanations when needed. Use markdown formatting for emphasis and clarity. answer in that way that the user can understand easily. and also use emojis to make the conversation more engaging. You are a professional love advisor, so you should always be polite and respectful. You should also be able to handle difficult situations with grace and tact.and also use that language that user is using. if user dont say then use their language in roman urdu.dont answer out side of love related questions.`,
        },
        {
          text: `use the following information to answer the user questions if someone ask about me.
          SEO: "Mr Wasim Abbas",
          Mobile: "+923473950897",
          Email: "wasimabbas0051@gmail.com",
          About: "Master of Information Technology, Web and App Developer, SEO Expert, AI Bot Developer, and Digital Marketer."`,
        },
        { text: `User input: ${input}` },
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts: promptParts }],
        generationConfig,
      });

      const botRawText = result.response.text();
      const safeBotText = sanitizeMarkdown(botRawText);
      setMessages((prev) => [...prev, { sender: "bot", text: safeBotText }]);
      senddata(input, botRawText);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "💔 Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    const trimmed = inputMessage.trim();
    if (!trimmed || isLoading) return;
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    genAi(trimmed);
    setInputMessage("");
  };

  return (
    <div className="flex  justify-center h-[90vh] bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 fixed left-1/2 translate-x-[-50%]">
      <div className="w-full max-w-2xl h-[75vh] sm:h-[95vh] lg:h-[100vh] bg-white shadow-2xl rounded-2xl flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-pink-600 via-red-500 to-pink-400 text-white p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💌</span>
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Your Love Advisor</h1>
              <div className="flex text-sm opacity-80">
                <p className="bg-green-400 w-2 h-2 mt-[6px] mr-2 rounded-full"></p>
                <p>Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gradient-to-b from-pink-50 via-red-50 to-pink-50 border">
          {messages.length === 0 && (
            <div className="text-center text-gray-700 italic flex flex-col items-center gap-4">
              <Image src={love} alt="love" className="w-full h-auto max-w-xs sm:max-w-md opacity-80" />
              <div className="text-2xl sm:text-3xl font-black text-pink-700 bg-white/60 p-4 rounded-xl">
                Welcome to your Love Advisor 💖
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[85%] p-3 rounded-xl shadow-sm ${
                msg.sender === "user"
                  ? "ml-auto bg-gradient-to-r from-pink-600 to-red-400 text-white"
                  : "bg-white text-gray-800"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          ))}

          {isLoading && (
            <div className="text-gray-700">
              <Typing />
            </div>
          )}

          <div ref={messagesEndRef} />
        </main>

        {/* Input */}
        <footer className="p-3 sm:p-4 bg-gradient-to-r from-pink-400 via-red-300 to-pink-400 border rounded-b-2xl">
          <div className="flex items-center gap-2">
            <textarea
              className="flex-1 p-2 rounded-lg border border-pink-300 focus:outline-none resize-none"
              rows={2}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask anything about love..."
            />
            <button
              onClick={handleSend}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
