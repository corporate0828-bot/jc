import {
  PhoneCall,
  Mail,
  FileText,
  Calendar,
  ShieldCheck,
  Car,
  Handshake,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (presetService?: string) => void;
  onScrollToCalculator: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/aistudio/bg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Subtle transparent dark overlay / gradient to improve text readability */}
      <div
        className="absolute inset-0 bg-[#07172F]/50 bg-gradient-to-r from-[#07172F]/95 via-[#07172F]/75 to-[#07172F]/30 lg:from-[#07172F]/90 lg:via-[#07172F]/50 lg:to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 flex-1 flex flex-col justify-between w-full">
        {/* Top & Middle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-4">
          {/* Left Column: Typography, Badges & 4 Feature Points */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Pill Badge: Our Primary Focus */}
            <div className="inline-block bg-[#F4B41A] text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm tracking-wide">
              Our Primary Focus
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Car Leasing
              <span className="text-[#F4B41A] block mt-1">for Companies &amp; Individuals</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-white mt-4 mb-3 tracking-tight">
              Drive Your Business &amp; Life Forward
            </h2>

            {/* 3 Copy bullets matching exact image copy */}
            <div className="space-y-1.5 text-sm sm:text-base mb-7">
              <p className="text-white font-medium flex items-center gap-2">
                <span>Reliable Cars. Professional Drivers.</span>
                <span className="text-[#F4B41A] font-bold text-sm">✈</span>
              </p>
              <p className="text-[#F4B41A] font-semibold text-sm sm:text-base">
                Flexible Leasing Plans for Short, Mid &amp; Long Term.
              </p>
              <p className="text-slate-300 italic text-xs sm:text-sm">
                Local &amp; Outstation Trips available later.
              </p>
            </div>

            {/* 4 Feature Points with Vertical Divider Lines */}
            <div className="w-full pt-5 border-t border-slate-700/60 max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 items-center">
                {/* 1. Corporate Car Leasing */}
                <div className="flex flex-col items-center text-center px-1">
                  <Handshake className="w-7 h-7 text-[#F4B41A] mb-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Corporate<br />Car Leasing
                  </span>
                </div>

                {/* 2. Monthly & Long-Term Contracts */}
                <div className="flex flex-col items-center text-center px-1 sm:border-l sm:border-amber-500/30">
                  <Calendar className="w-7 h-7 text-[#F4B41A] mb-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Monthly &amp;<br />Long-Term Contracts
                  </span>
                </div>

                {/* 3. Safe & Reliable Service */}
                <div className="flex flex-col items-center text-center px-1 sm:border-l sm:border-amber-500/30">
                  <ShieldCheck className="w-7 h-7 text-[#F4B41A] mb-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Safe &amp;<br />Reliable Service
                  </span>
                </div>

                {/* 4. Local & Outstation Trips */}
                <div className="flex flex-col items-center text-center px-1 sm:border-l sm:border-amber-500/30">
                  <Car className="w-7 h-7 text-[#F4B41A] mb-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Local &amp;<br />Outstation Trips
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Open visual focal area letting the background sedan and skyline showcase */}
          <div className="hidden lg:block lg:col-span-5 h-full min-h-[380px]" aria-hidden="true" />
        </div>

        {/* Floating Action Card: "Get in Touch Instantly" Bar */}
        <div className="mt-8 sm:mt-12 relative z-20">
          {/* Top-left attached yellow tab */}
          <div className="inline-flex items-center gap-1.5 bg-[#F4B41A] text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2 rounded-t-xl shadow-md tracking-wide">
            Get in Touch Instantly
          </div>

          {/* Action Bar Body */}
          <div className="bg-white rounded-b-2xl sm:rounded-2xl sm:rounded-tl-none p-3 sm:p-4 shadow-2xl border border-slate-200 grid grid-cols-1 xl:grid-cols-12 gap-3 items-center">
            {/* 4 Interactive Colored Action Buttons */}
            <div className="xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {/* 1. Call Now Button */}
              <a
                href="tel:7038340008"
                className="bg-[#0A1C38] hover:bg-[#06142A] text-white p-3 rounded-xl transition-all flex items-center gap-3 group shadow-sm hover:-translate-y-0.5"
                title="Call Directly: +91 7038340008"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#F4B41A]/20 transition-colors">
                  <PhoneCall className="w-5 h-5 text-white group-hover:text-[#F4B41A] transition-colors" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Call Now
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-white truncate">
                    +91 7038340008
                  </span>
                </div>
              </a>

              {/* 2. WhatsApp Us Button */}
              <a
                href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20get%20a%20car%20leasing%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white p-3 rounded-xl transition-all flex items-center gap-3 group shadow-sm hover:-translate-y-0.5"
                title="Chat on WhatsApp"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 fill-current text-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 2C6.495 2 2 6.493 2 12.029c0 1.97.57 3.882 1.649 5.518L2 22l4.614-1.615A9.97 9.97 0 0 0 12.031 22C17.568 22 22 17.507 22 12.029 22 6.493 17.568 2 12.031 2zm5.83 14.18c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.12.074-3.626-.957-3.208-1.322-5.263-4.57-5.424-4.786-.157-.215-1.296-1.724-1.296-3.288 0-1.564.819-2.333 1.112-2.65.292-.317.638-.396.85-.396.213 0 .426.002.612.012.198.01.464-.075.727.558.27.65.918 2.247.998 2.411.08.164.133.356.026.57-.106.214-.16.347-.318.533-.16.186-.336.416-.48.558-.16.16-.327.333-.14.654.186.32 1.01 1.664 2.164 2.692 1.488 1.324 2.742 1.734 3.13 1.928.388.194.615.163.844-.1.229-.262.984-1.144 1.25-1.536.265-.392.53-.327.89-.194.36.133 2.28 1.077 2.673 1.273.393.196.654.293.75.457.096.164.096.953-.148 1.639z" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white">WhatsApp Us</span>
                  <span className="text-[11px] text-emerald-100 font-medium truncate">
                    Chat for Quick Quote
                  </span>
                </div>
              </a>

              {/* 3. Send Email Button */}
              <a
                href="mailto:info@jyotrilingmobility.com?subject=Car%20Leasing%20Inquiry%20-%20Jyotirling%20Mobility"
                className="bg-[#0A1C38] hover:bg-[#06142A] text-white p-3 rounded-xl transition-all flex items-center gap-3 group shadow-sm hover:-translate-y-0.5"
                title="Send Email: info@jyotrilingmobility.com"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#F4B41A]/20 transition-colors">
                  <Mail className="w-5 h-5 text-white group-hover:text-[#F4B41A] transition-colors" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Send Email
                  </span>
                  <span className="text-[11px] font-medium text-slate-200 truncate">
                    info@jyotrilingmobility.com
                  </span>
                </div>
              </a>

              {/* 4. Get a Quote Button */}
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Car Leasing for Companies & Individuals')}
                className="bg-[#F4B41A] hover:bg-[#E0A212] text-slate-950 p-3 rounded-xl transition-all flex items-center gap-3 group shadow-md hover:-translate-y-0.5 cursor-pointer text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-slate-950" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                    Get a Quote
                  </span>
                  <span className="text-[11px] font-semibold text-slate-800">
                    Fill the Form
                  </span>
                </div>
              </button>
            </div>

            {/* Right Trust Panel: Quick Response, Transparent Pricing, Long-Term Partnership */}
            <div className="xl:col-span-3 bg-[#0A1C38] text-white rounded-xl p-3 flex items-center justify-around gap-2 shadow-inner">
              <div className="flex flex-col items-center text-center">
                <Zap className="w-4 h-4 text-[#F4B41A] mb-1" />
                <span className="text-[11px] font-semibold leading-tight text-slate-200 whitespace-nowrap">
                  Quick<br />Response
                </span>
              </div>

              <div className="w-px h-8 bg-slate-700/80" />

              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="text-[11px] font-semibold leading-tight text-slate-200 whitespace-nowrap">
                  Transparent<br />Pricing
                </span>
              </div>

              <div className="w-px h-8 bg-slate-700/80" />

              <div className="flex flex-col items-center text-center">
                <Handshake className="w-4 h-4 text-[#F4B41A] mb-1" />
                <span className="text-[11px] font-semibold leading-tight text-slate-200 whitespace-nowrap">
                  Long-Term<br />Partnership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Footer Strip */}
      <div className="relative z-10 bg-[#06142A]/90 backdrop-blur-sm text-slate-300 py-3.5 px-4 border-t border-amber-500/20 text-center text-xs sm:text-sm font-bold tracking-wider uppercase">
        JYOTIRLING CAR LEASING &amp; MOBILITY <span className="mx-2 text-amber-400">—</span> Your Mobility, Our Commitment
      </div>
    </section>
  );
}
