import Link from 'next/link';
import { Building2, Landmark, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 relative">
      {/* Subtle background glow mimicking the design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00e5ff] opacity-5 blur-[120px] pointer-events-none rounded-full" />
      
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 text-center relative z-10 drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
        Ready to <span className="bg-gradient-to-t from-[#00e5ff] to-white/90 bg-clip-text text-transparent">Take Flight?</span>
      </h2>
      
      <p className="text-zinc-100 text-[17px] leading-relaxed text-center max-w-3xl mx-auto mb-16 relative z-10 font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-8 py-3 rounded-full backdrop-blur-[2px]">
        Whether you're an enterprise, research organization, or academic institution,
        we're here to deliver tailored drone solutions for your needs.
      </p>

      {/* Pill Links container */}
      <div className="flex flex-col md:flex-row gap-5 justify-center mb-16 relative z-10 w-full max-w-4xl">
        <div className="flex items-center justify-center gap-3 bg-[#0d131cdc] hover:bg-[#121a25] transition-colors rounded-xl px-6 py-5 flex-1 border border-white/5 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <Building2 className="w-[18px] h-[18px] text-[#00e5ff]" strokeWidth={2.5}/>
          <span className="text-[14px] font-bold text-white tracking-wide">Enterprise Inquiries</span>
        </div>
        <div className="flex items-center justify-center gap-3 bg-[#0d131cdc] hover:bg-[#121a25] transition-colors rounded-xl px-6 py-5 flex-1 border border-white/5 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <Landmark className="w-[18px] h-[18px] text-[#00e5ff]" strokeWidth={2.5}/>
          <span className="text-[14px] font-bold text-white tracking-wide">Academic Partners</span>
        </div>
        <div className="flex items-center justify-center gap-3 bg-[#0d131cdc] hover:bg-[#121a25] transition-colors rounded-xl px-6 py-5 flex-1 border border-white/5 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <Lightbulb className="w-[18px] h-[18px] text-[#00e5ff]" strokeWidth={2.5}/>
          <span className="text-[14px] font-bold text-white tracking-wide">Research & Innovation</span>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
        <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00e5ff] hover:bg-white text-[#050b14] font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          <MessageSquare className="w-5 h-5 flex-shrink-0" strokeWidth={2.5}/>
          <span className="tracking-wide">Contact Us</span>
        </Link>
        <Link href="/training" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#00e5ff]/10 text-[#00e5ff] font-bold border border-[#00e5ff]/40 rounded-xl transition-all duration-300">
          <span className="tracking-wide">Explore Training</span>
          <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2.5}/>
        </Link>
      </div>
    </div>
  );
}
