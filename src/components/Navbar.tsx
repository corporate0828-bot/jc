import { useState } from 'react';
import { Home, Car, Building2, Users, Mail, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenInquiryDrawer: () => void;
  inquiryCount: number;
}

export default function Navbar({ onOpenQuoteModal, onOpenInquiryDrawer, inquiryCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Logo Lockup matching reference design with high visibility */}
        <a href="#hero" className="flex items-center shrink-0 group py-1" aria-label="Jyotirling Car Leasing & Mobility Home">
          <img
            src="/assets/aistudio/brand_logo.png"
            alt="JYOTIRLING CAR LEASING & MOBILITY"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[155px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-transform group-hover:scale-102"
          />
        </a>

        {/* Center: Nav Items with Icons above Text matching reference design */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-700">
          <a
            href="#hero"
            className="flex flex-col items-center gap-1 group py-1 hover:text-[#0A1C38] transition-colors"
          >
            <Home className="w-5 h-5 text-slate-600 group-hover:text-[#F4B41A] transition-colors" />
            <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A1C38]">
              Home
            </span>
          </a>

          <a
            href="#sectors"
            className="flex flex-col items-center gap-1 group py-1 hover:text-[#0A1C38] transition-colors"
          >
            <Car className="w-5 h-5 text-slate-600 group-hover:text-[#F4B41A] transition-colors" />
            <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A1C38]">
              Our Services
            </span>
          </a>

          <a
            href="#why-us"
            className="flex flex-col items-center gap-1 group py-1 hover:text-[#0A1C38] transition-colors"
          >
            <Building2 className="w-5 h-5 text-slate-600 group-hover:text-[#F4B41A] transition-colors" />
            <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A1C38]">
              Why Us
            </span>
          </a>

          <a
            href="#why-us"
            className="flex flex-col items-center gap-1 group py-1 hover:text-[#0A1C38] transition-colors"
          >
            <Users className="w-5 h-5 text-slate-600 group-hover:text-[#F4B41A] transition-colors" />
            <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A1C38]">
              About Us
            </span>
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center gap-1 group py-1 hover:text-[#0A1C38] transition-colors"
          >
            <Mail className="w-5 h-5 text-slate-600 group-hover:text-[#F4B41A] transition-colors" />
            <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A1C38]">
              Contact
            </span>
          </a>
        </nav>

        {/* Right: Phone Container + WhatsApp Button + 3-line Hamburger Menu */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Phone block */}
          <a
            href="tel:7038340008"
            className="hidden md:inline-flex items-center gap-2 bg-[#0A1C38] hover:bg-[#07152B] text-white px-3.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-102 active:scale-98 whitespace-nowrap shrink-0"
            title="Call Helpline"
          >
            <Phone className="w-4 h-4 text-white shrink-0" />
            <span>+91 7038340008</span>
          </a>

          {/* WhatsApp Us Button */}
          <a
            href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20car%20leasing%20and%20rental."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#F4B41A] hover:bg-[#E0A212] text-slate-950 font-extrabold px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-sm sm:shadow-md transition-all hover:scale-102 active:scale-98 whitespace-nowrap shrink-0"
            title="Chat on WhatsApp"
          >
            {/* WhatsApp authentic SVG icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0 text-slate-950"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 2C6.495 2 2 6.493 2 12.029c0 1.97.57 3.882 1.649 5.518L2 22l4.614-1.615A9.97 9.97 0 0 0 12.031 22C17.568 22 22 17.507 22 12.029 22 6.493 17.568 2 12.031 2zm5.83 14.18c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.12.074-3.626-.957-3.208-1.322-5.263-4.57-5.424-4.786-.157-.215-1.296-1.724-1.296-3.288 0-1.564.819-2.333 1.112-2.65.292-.317.638-.396.85-.396.213 0 .426.002.612.012.198.01.464-.075.727.558.27.65.918 2.247.998 2.411.08.164.133.356.026.57-.106.214-.16.347-.318.533-.16.186-.336.416-.48.558-.16.16-.327.333-.14.654.186.32 1.01 1.664 2.164 2.692 1.488 1.324 2.742 1.734 3.13 1.928.388.194.615.163.844-.1.229-.262.984-1.144 1.25-1.536.265-.392.53-.327.89-.194.36.133 2.28 1.077 2.673 1.273.393.196.654.293.75.457.096.164.096.953-.148 1.639z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp Us &gt;</span>
            <span className="sm:hidden text-[11px] font-bold">WhatsApp</span>
          </a>

          {inquiryCount > 0 && (
            <button
              onClick={onOpenInquiryDrawer}
              className="hidden sm:inline-block text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-300 font-semibold transition-colors"
            >
              Inquiries ({inquiryCount})
            </button>
          )}

          {/* Mobile hamburger button (3 lines) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-800 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition-colors shrink-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3.5 text-base font-semibold text-slate-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1.5 text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Home className="w-5 h-5 text-slate-500" />
              <span>Home</span>
            </a>
            <a
              href="#sectors"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1.5 text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Car className="w-5 h-5 text-slate-500" />
              <span>Our Services</span>
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1.5 text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Building2 className="w-5 h-5 text-slate-500" />
              <span>Why Us</span>
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1.5 text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Users className="w-5 h-5 text-slate-500" />
              <span>About Us</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1.5 text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-slate-500" />
              <span>Contact</span>
            </a>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              {inquiryCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiryDrawer();
                  }}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg border border-slate-300"
                >
                  View Saved Inquiries ({inquiryCount})
                </button>
              )}

              <a
                href="tel:7038340008"
                className="w-full py-2.5 text-center font-bold text-white bg-[#0A1C38] hover:bg-[#07152B] rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +91 7038340008</span>
              </a>

              <a
                href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20car%20leasing."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-center font-bold text-slate-950 bg-[#F4B41A] hover:bg-[#E0A212] rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>WhatsApp Us &gt;</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-lg border border-slate-300"
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
