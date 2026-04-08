"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, status, sendMessage } = useChat();
  const isLoading = status === "submitted" || status === "streaming";

  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  const quickActions = [
    "Explore Drone Products",
    "Request a Demo",
    "Training Programs",
    "Talk to an Expert",
    "Why Choose Yudru?"
  ];

  const handleQuickAction = (action: string) => {
    if (isLoading) return;
    sendMessage({ text: action });
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[85vw] sm:w-80 md:w-96 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10 relative overflow-hidden">
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(to right, rgba(0, 229, 255, 0.05), rgba(168, 85, 247, 0.05))' }}
              />
              <div className="flex items-center space-x-3 relative z-10">
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0px rgba(0, 229, 255, 0)",
                        "0 0 30px rgba(0, 229, 255, 0.7)",
                        "0 0 0px rgba(0, 229, 255, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 overflow-hidden shadow-lg"
                  >
                    <img
                      src="/Yudru-Ai.jpg"
                      alt="Yudru AI"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-none tracking-tight">Yudru Assistant</h3>
                  <span className="text-[10px] text-[#00e5ff] font-bold uppercase tracking-widest mt-1 block opacity-80">AI active</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors relative z-10 hover:bg-white/10 p-1.5 rounded-full"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.length === 0 ? (
                <div className="space-y-4">
                  {/* AI Intro Bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-row items-start space-x-3"
                  >
                    <div 
                      className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0 mt-1"
                      style={{ boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' }}
                    >
                      <img src="/Yudru-Ai.jpg" className="w-full h-full object-cover" alt="AI" />
                    </div>
                    <div className="max-w-[85%] rounded-2xl p-4 text-sm bg-white/10 text-white/90 rounded-bl-sm border border-white/5 shadow-xl">
                      <p className="mb-2 font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent border-b border-white/5 pb-1">
                        Hi 👋 I'm Yudru Assistant!
                      </p>
                      <div className="leading-relaxed space-y-1">
                        <p>I can help you with:</p>
                        <p>• Drone products & specs</p>
                        <p>• Training & certification</p>
                        <p>• Pricing & quotes</p>
                        <p>• Technical questions</p>
                        <p className="pt-1">How can I help you today?</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Action Chips */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleQuickAction(action)}
                        className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-xs font-medium transition-all active:scale-95 hover:text-white"
                        style={{ backgroundColor: 'rgba(0, 229, 255, 0.05)' }}
                      >
                        {action}
                      </button>
                    ))}
                  </motion.div>
                </div>
              ) : (
                messages.map((m: any) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "flex-col items-end" : "flex-row items-start space-x-2"
                      }`}
                  >
                    {m.role !== "user" && (
                      <div 
                        className="w-8 h-8 rounded-full border border-white/10 overflow-hidden shrink-0 mt-1"
                        style={{ boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)' }}
                      >
                        <img src="/Yudru-Ai.jpg" className="w-full h-full object-cover" alt="AI" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-sm ${m.role === "user"
                        ? "bg-blue-600 text-white rounded-br-sm shadow-lg"
                        : "bg-white/10 text-white/90 rounded-bl-sm border border-white/5"
                        }`}
                      style={m.role === "user" ? { boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)' } : {}}
                    >
                      {m.parts
                        ? m.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')
                        : (typeof m.content === 'string' ? m.content : '')}
                    </div>
                  </motion.div>
                ))
              )}

              {/* Loading animation */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 text-white/90 rounded-2xl rounded-bl-sm p-4 flex items-center space-x-2">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay }}
                        className="w-1.5 h-1.5 bg-white/50 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleCustomSubmit}
              className="p-3 bg-black/40 border-t border-white/10 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our drones..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              />

              <button
                type="submit"
                disabled={isLoading || !input?.trim()}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/10 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0, 229, 255, 0)",
                    "0 0 45px rgba(0, 229, 255, 0.8)",
                    "0 0 0px rgba(0, 229, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full rounded-full overflow-hidden border border-white/20"
              >
                <img
                  src="/Yudru-Ai.jpg"
                  alt="Yudru AI"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}