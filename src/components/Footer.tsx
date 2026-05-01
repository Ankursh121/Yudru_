import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/contact";

export default function Footer() {
  return (
    <footer className="w-full bg-[#03060a] border-t border-white/5 pt-24 pb-12 px-8 lg:px-16 z-30 relative">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col pr-8">
            <div className="flex items-center gap-4 mb-8">
              {/* Brand Logo */}
              <img src="/Yudru_Logo.png" alt="Yudru Drone Solutions Logo" className="h-[65px] md:h-[90px] w-auto object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-transform hover:scale-105 duration-300" />
            </div>
            <p className="text-[#8e9bb0] text-[15px] leading-relaxed mb-10 max-w-sm">
              Indigenous drone technology solutions for monitoring, logistics, and industrial applications. 
              100% non-Chinese, secure, and compliant.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/yudru-technology/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0a0f16] border border-white/5 flex items-center justify-center text-[#8e9bb0] hover:text-[#00e5ff] hover:bg-[#0f1722] transition-colors hover:border-[#00e5ff]/30 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                <svg className="fill-current w-[15px] h-[15px]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/yudru__?igsh=ajBvejdyazk1eXln&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0a0f16] border border-white/5 flex items-center justify-center text-[#8e9bb0] hover:text-[#00e5ff] hover:bg-[#0f1722] transition-colors hover:border-[#00e5ff]/30 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                <svg className="fill-current w-[16px] h-[16px]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide drop-shadow-sm">Products</h4>
            <div className="flex flex-col gap-5">
              <Link href="/products#soccer" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Soccer Drones</Link>
              <Link href="/products#surveillance" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Surveillance Drones</Link>
              <Link href="/products#logistic" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Payload Drones</Link>
              <Link href="/products#batteries" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Batteries & Power</Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide drop-shadow-sm">Services</h4>
            <div className="flex flex-col gap-5">
              <Link href="/r-and-d" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">R&D Services</Link>
              <Link href="/training" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Drone Training</Link>
              <Link href="/training" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Workshops</Link>
              <Link href="/drone-labs" className="text-[#8e9bb0] hover:text-[#00e5ff] text-[15px] transition-colors font-medium">Drone Labs</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide drop-shadow-sm">Contact</h4>
            <div className="flex flex-col gap-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#00e5ff] hover:text-white transition-colors text-[15px] font-medium group">
                <MessageCircle className="w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                <span>WhatsApp Us</span>
              </a>
              <a href="mailto:info@yudru.com" className="flex items-center gap-3 text-[#00e5ff] hover:text-white transition-colors text-[15px] font-medium group">
                <Mail className="w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                <span>info@yudru.com</span>
              </a>
              <a href="tel:+918178422103" className="flex items-center gap-3 text-[#00e5ff] hover:text-white transition-colors text-[15px] font-medium group">
                <Phone className="w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                <span>+91 8178422103</span>
              </a>
              <div className="flex items-start gap-3 text-[#8e9bb0] text-[15px] font-medium mt-1">
                <MapPin className="w-[18px] h-[18px] text-[#00e5ff] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Ganesh Nagar<br/>New Delhi, 110092</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[#5e6b7c] text-[14px] gap-4 font-medium tracking-wide">
          <p>© 2026 YuDru Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
