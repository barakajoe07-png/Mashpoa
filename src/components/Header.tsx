import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="sticky top-0 z-50">
      {showBanner && (
        <div className="bg-[#d11b1b] text-white text-[11px] font-bold px-3 py-2 flex justify-between items-center text-center">
          <span className="flex-1">🎉 Receive up to 25% discount when you book with our website!</span>
          <button onClick={() => setShowBanner(false)} className="p-1 hover:bg-red-800 rounded-full transition-colors shrink-0">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <img src="/mash-poa-logo.png" alt="Mash Poa Logo" className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="text-xl leading-none">
          🇬🇧
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-[#d11b1b] hover:bg-red-800 text-white rounded-full transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        {menuOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-xl border border-gray-100 rounded-xl py-2 w-48 text-sm font-bold z-50 flex flex-col">
            <button onClick={() => setMenuOpen(false)} className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-[#d11b1b] transition-colors">Track Ticket</button>
            <button onClick={() => setMenuOpen(false)} className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-[#d11b1b] transition-colors">Terms & Conditions</button>
            <button onClick={() => setMenuOpen(false)} className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-[#d11b1b] transition-colors">Offers</button>
            <div className="h-px bg-gray-100 my-1 w-full" />
            <button onClick={() => setMenuOpen(false)} className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-[#d11b1b] transition-colors">Contact Support</button>
          </div>
        )}
      </div>
    </header>
    </div>
  );
}
