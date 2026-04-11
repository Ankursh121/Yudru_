import Link from "next/link";
import { Mail, Phone, MapPin, Combine } from "lucide-react";

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
              <a href="#" className="w-10 h-10 rounded-xl bg-[#0a0f16] border border-white/5 flex items-center justify-center text-[#8e9bb0] hover:text-[#00e5ff] hover:bg-[#0f1722] transition-colors hover:border-[#00e5ff]/30 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                <svg className="fill-current w-[15px] h-[15px]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#0a0f16] border border-white/5 flex items-center justify-center text-[#8e9bb0] hover:text-[#00e5ff] hover:bg-[#0f1722] transition-colors hover:border-[#00e5ff]/30 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                <svg className="fill-current w-[15px] h-[15px]" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#0a0f16] border border-white/5 flex items-center justify-center text-[#8e9bb0] hover:text-[#00e5ff] hover:bg-[#0f1722] transition-colors hover:border-[#00e5ff]/30 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                <svg className="fill-current w-[16px] h-[16px]" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
              <a href="mailto:info@yudru.com" className="flex items-center gap-3 text-[#00e5ff] hover:text-white transition-colors text-[15px] font-medium group">
                <Mail className="w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                <span>info@yudru.com</span>
              </a>
              <a href="tel:+919810653919" className="flex items-center gap-3 text-[#00e5ff] hover:text-white transition-colors text-[15px] font-medium group">
                <Phone className="w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                <span>+91 9810653919</span>
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
