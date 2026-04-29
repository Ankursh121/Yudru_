import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#00e5ff] opacity-5 blur-[120px] pointer-events-none rounded-full" />

      <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-32 md:pt-48 pb-32 relative z-10">
        
        {/* Header — scaled down on mobile */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold tracking-tighter text-white mb-4 md:mb-6 drop-shadow-md leading-tight">
            Get in <span className="bg-gradient-to-t from-[#00e5ff] to-white/90 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-white/60 text-[15px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed px-2">
            Have a question or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Info Pills — compact on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-16">
          
          <div className="flex items-center gap-4 bg-[#0a0f16]/60 border border-white/5 rounded-2xl px-5 py-4 md:p-6 hover:bg-[#0c131c] hover:border-white/10 transition-colors backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/20 flex items-center justify-center">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#00e5ff]" strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Email</span>
              <a href="mailto:info@yudru.com" className="text-white font-bold text-sm tracking-wide hover:text-[#00e5ff] transition-colors truncate">info@yudru.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0a0f16]/60 border border-white/5 rounded-2xl px-5 py-4 md:p-6 hover:bg-[#0c131c] hover:border-white/10 transition-colors backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/20 flex items-center justify-center">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#00e5ff]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Phone</span>
              <a href="tel:+918178422103" className="text-white font-bold text-sm tracking-wide hover:text-[#00e5ff] transition-colors">+91 8178422103</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0a0f16]/60 border border-white/5 rounded-2xl px-5 py-4 md:p-6 hover:bg-[#0c131c] hover:border-white/10 transition-colors backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#00e5ff]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Location</span>
              <span className="text-white font-bold text-[13px] tracking-wide leading-tight">Ganesh Nagar, New Delhi<br/>110092</span>
            </div>
          </div>

        </div>

        {/* WhatsApp CTA */}
        <div className="w-full bg-[#0a0f16]/60 border border-white/5 rounded-3xl p-8 md:p-16 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/5 to-transparent pointer-events-none" />
          
          <div className="w-20 h-20 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center mb-8 border border-[#00e5ff]/20 text-[#00e5ff] relative z-10">
            <MessageCircle className="w-10 h-10" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 relative z-10">
            Chat with our <span className="text-[#00e5ff]">Expert Team</span>
          </h2>
          
          <p className="text-[#8e9bb0] text-[16px] md:text-[18px] leading-relaxed mb-12 font-medium max-w-2xl relative z-10">
            For rapid support, business inquiries, or technical consultations, tap the button below to start a conversation directly on WhatsApp.
          </p>

          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-[#00e5ff] hover:bg-white text-[#050b14] font-bold text-[18px] rounded-2xl transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] relative z-10"
          >
            Start WhatsApp Chat
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <p className="mt-8 text-white/30 text-[13px] font-bold uppercase tracking-widest relative z-10">
            Available Mon - Sat | 10:00 AM - 7:00 PM
          </p>
        </div>

      </div>

      <Footer />
    </main>
  );
}
