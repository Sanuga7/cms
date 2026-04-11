"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "#", 
    dropdown: [
      { name: "Vision", href: "/about/vision" },
      { name: "Mission", href: "/about/mission" },
      { name: "Principal", href: "/about/principal" },
      { name: "Prefect Guild", href: "/about/prefects" },
      { name: "OBA", href: "/about/oba" },
    ] 
  },
  { name: "History", href: "/history" },
  { 
    name: "Academics", 
    href: "#", 
    dropdown: [
      { name: "Primary Section", href: "/academics/primary" },
      { name: "O/L Section", href: "/academics/ol" },
      { name: "A/L Section", href: "/academics/al" },
    ] 
  },
  { 
    name: "Sports", 
    href: "#", 
    dropdown: [
      { name: "Sports", href: "/sports/list" },
      { name: "Societies", href: "/sports/societies" },
    ] 
  },
  { 
    name: "News", 
    href: "#", 
    dropdown: [
      { name: "School News", href: "/news/school" },
      { name: "Sports Achievements", href: "/news/sports" },
      { name: "Student Achievements", href: "/news/students" },
      { name: "Events", href: "/news/events" },
    ] 
  },
  { name: "Gallery", href: "/gallery" },
];  

  return (
    <nav className="bg-[#020617] text-white sticky top-0 z-50 shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/crest-no-bg.png" alt="Logo" className="h-12 w-auto" />
            <div className="leading-tight uppercase tracking-tighter">
              <p className="font-bold text-lg">Lumbini</p>
              <p className="font-bold text-lg text-[#F6BE00]">College</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-20 flex items-center">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-gray-300 hover:text-[#F6BE00] transition-colors font-medium text-[13px] uppercase tracking-wider"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* DROPDOWN MENU (Desktop Hover) */}
                {link.dropdown && (
                  <div className="absolute top-20 left-0 w-52 bg-[#0f172a] border-t-2 border-[#F6BE00] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-xs uppercase tracking-widest text-gray-300 hover:bg-[#1e293b] hover:text-[#F6BE00] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* THEATER LINK */}
          <div className="hidden lg:block border-l border-gray-700 pl-8">
            <Link href="/theater" className="text-sm font-semibold hover:text-[#F6BE00] transition uppercase">
              Lumbini Theater
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#020617] border-t border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium border-b border-gray-800 text-[#F6BE00]"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 bg-gray-900/50">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-sm text-gray-400 border-b border-gray-800 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;