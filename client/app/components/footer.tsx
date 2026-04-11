import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/crest-no-bg.png"
                alt="Lumbini College Logo"
                className="h-16 w-auto"
              />
              <div className="leading-tight uppercase tracking-tighter">
                <p className="font-bold text-xl">Lumbini</p>
                <p className="font-bold text-xl text-[#F6BE00]">College</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
              Established in 1929, Lumbini College continues to nurture excellence 
              in academics, sports, and character. "Nothing is Impossible."
            </p>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-[#F6BE00] font-bold text-lg mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/history" className="hover:text-white transition-colors">History</Link></li>
              <li><Link href="/academics/al" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[#F6BE00] font-bold text-lg mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-[#F6BE00]" />
                <span>Havelock Road, Colombo 05, Sri Lanka</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-[#F6BE00]" />
                <span>+94 11 258 2110</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-[#F6BE00]" />
                <span>info@lumbinicollege.lk</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[#F6BE00] font-bold text-lg mb-6 uppercase tracking-widest text-xs">
              Follow Our Journey
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F6BE00] hover:text-[#020617] transition-all">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F6BE00] hover:text-[#020617] transition-all">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F6BE00] hover:text-[#020617] transition-all">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {year} Lumbini College, Colombo 05. All Rights Reserved & Created by <FontAwesomeIcon icon={faHeart} />.
          </p>
          <div className="text-gray-500 text-xs flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;