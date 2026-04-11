import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

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
            Have a question or want to collaborate? We'd love to hear from you.
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
              <a href="tel:+919810653919" className="text-white font-bold text-sm tracking-wide hover:text-[#00e5ff] transition-colors">+91 9810653919</a>
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

        {/* Contact Form */}
        <ContactForm />

      </div>

      <Footer />
    </main>
  );
}
