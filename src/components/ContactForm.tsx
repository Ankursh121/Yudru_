"use client";
import { useState } from "react";
import { Building2, Landmark, Lightbulb, GraduationCap, Send } from "lucide-react";

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState<string>("Enterprise");

  const types = [
    { id: "Enterprise", icon: Building2, label: "Enterprise" },
    { id: "Academic", icon: Landmark, label: "Academic" },
    { id: "Research", icon: Lightbulb, label: "Research" },
    { id: "Training", icon: GraduationCap, label: "Training" },
  ];

  return (
    <div className="w-full bg-[#0a0f16]/60 border border-white/5 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <form className="flex flex-col gap-8">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white tracking-wide">Full Name *</label>
            <input type="text" placeholder="Your name" className="w-full bg-[#03060a]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#00e5ff] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white tracking-wide">Email *</label>
            <input type="email" placeholder="your@email.com" className="w-full bg-[#03060a]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#00e5ff] transition-colors" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white tracking-wide">Phone</label>
            <input type="tel" placeholder="+91 98765 43210" className="w-full bg-[#03060a]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#00e5ff] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white tracking-wide">Organization</label>
            <input type="text" placeholder="Company or Institution" className="w-full bg-[#03060a]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#00e5ff] transition-colors" />
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-white tracking-wide mb-1">Inquiry Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {types.map((type) => (
              <div 
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all ${selectedType === type.id ? 'bg-[#00e5ff]/10 border-[#00e5ff] text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.15)]' : 'bg-[#03060a]/80 border-white/5 text-white/50 hover:bg-[#111822] hover:text-white/80 hover:border-white/20'}`}
              >
                <type.icon className="w-[14px] h-[14px]" />
                <span className="text-[13px] font-semibold">{type.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-white tracking-wide">Message *</label>
          <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-[#03060a]/80 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 outline-none focus:border-[#00e5ff] transition-colors resize-none"></textarea>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button type="button" className="flex items-center justify-center gap-2 px-8 py-4 w-full md:w-auto bg-[#00e5ff] hover:bg-white text-[#050b14] text-[15px] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <span className="tracking-wide">Send Message</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </div>

      </form>
    </div>
  );
}
