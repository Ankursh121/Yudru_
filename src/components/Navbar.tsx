"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 flex items-center justify-between px-8 py-4 bg-white/[0.03] backdrop-blur-3xl saturate-200 border border-white/[0.1] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] rounded-2xl transition-all">
      <div className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
        <Link href="/">Yudru Drone</Link>
      </div>
      
      <div className="hidden xl:flex space-x-8 text-[13px] tracking-widest font-bold uppercase">
        {[
          { text: "Home", href: "/" },
          { text: "Products", href: "/products" },
          { text: "R&D", href: "/r-and-d" },
          { text: "Training", href: "/training" },
          { text: "Drone Labs", href: "/drone-labs" },
          { text: "Repair", href: "/repair" },
          { text: "Gallery", href: "/gallery" },
          { text: "About", href: "/about" },
        ].map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.text} 
              href={item.href} 
              className={`relative group inline-block transition-all duration-300 hover:-translate-y-[2px] hover:scale-110 ${
                isActive 
                  ? "text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" 
                  : "text-white/50 hover:text-[#00e5ff] hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]"
              }`}
            >
              {item.text}
              <span className={`absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#00e5ff] rounded-full shadow-[0_0_12px_rgba(0,229,255,1)] transition-transform duration-300 origin-center ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          );
        })}
      </div>

      <div>
        <Link href="/contact" className="px-6 py-2.5 rounded-full bg-[#00e5ff] text-[#050b14] text-[14px] font-bold transition-all hover:bg-white shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] tracking-wide">
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
