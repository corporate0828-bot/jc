import { useState } from 'react';
import {
  Car,
  MapPin,
  ShieldCheck,
  CalendarRange,
  BadgePercent,
  Headphones,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/fleetData';

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  icon: typeof Car;
  keywordTag: string;
  badge: string;
}

const WHY_CHOOSE_FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: 'Wide Range of Rental & Lease Cars',
    description:
      'Choose from an extensive fleet of vehicles for daily commuting, family trips, business travel, and long-term car leasing—including executive sedans, spacious MUVs, and economical city cars.',
    icon: Car,
    keywordTag: 'Cars on lease in Mumbai',
    badge: 'Hatchbacks, Sedans & MUVs',
  },
  {
    number: '02',
    title: 'Extensive Service Coverage',
    description:
      'Convenient car rental and leasing services across Navi Mumbai, Mumbai, Thane, and Raigad with rapid door-step delivery and seamless connectivity across industrial hubs and airports.',
    icon: MapPin,
    keywordTag: 'Car rental in Navi Mumbai & Thane',
    badge: '4 Districts Covered',
  },
  {
    number: '03',
    title: 'Well-Maintained & Comfortable Vehicles',
    description:
      'Enjoy clean, comfortable, and regularly maintained vehicles for a convenient travel experience. Every car undergoes multi-point safety inspections, deep sanitization, and dual-zone AC checks.',
    icon: ShieldCheck,
    keywordTag: 'Affordable car rental services',
    badge: '100% Sanitized & Verified',
  },
  {
    number: '04',
    title: 'Flexible Rental & Leasing Plans',
    description:
      'Explore flexible short-term rental, monthly rental, and long-term car leasing options tailored for corporate fleets, independent professionals, and extended family vacations.',
    icon: CalendarRange,
    keywordTag: 'Monthly car rental & leasing',
    badge: 'Daily · Monthly · Annual',
  },
  {
    number: '05',
    title: 'Transparent & Competitive Pricing',
    description:
      'Get clear quotations and competitive pricing options according to your vehicle requirements and rental duration. Benefit from upfront per-km slabs with zero hidden surcharges.',
    icon: BadgePercent,
    keywordTag: 'Car rental services in Mumbai',
    badge: 'GST Invoicing & Clear Rates',
  },
  {
    number: '06',
    title: 'Dedicated Customer Assistance',
    description:
      'Receive booking assistance and dedicated support throughout your car rental and leasing experience. Our 24/7 helpline ensures prompt vehicle allocation and live route assistance.',
    icon: Headphones,
    keywordTag: 'Car leasing services in Raigad',
    badge: '24/7 Dedicated Support',
  },
];

export default function TrustProof() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 divide-y divide-slate-200">
      {/* =========================================================================
          WHY CHOOSE US SECTION (SEO-Optimized & Automotive-Inspired)
          ========================================================================= */}
      <section
        id="why-us"
        aria-labelledby="why-choose-heading"
        className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 relative overflow-hidden"
      >
        {/* Subtle background ambient light */}
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full mb-4">
              <span>Why Choose Us</span>
            </div>

            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0A1C38] tracking-tight leading-[1.15] text-balance mb-4"
            >
              Why Choose Jyotirlinga Cars?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-700 leading-snug text-balance mb-4">
              Your Trusted Partner for Car Rental &amp; Leasing in Mumbai, Navi Mumbai, Thane &amp; Raigad.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Whether you are looking for an <strong>affordable car rental in Navi Mumbai</strong>, corporate{' '}
              <strong>cars on lease in Mumbai</strong>, flexible <strong>monthly car rental</strong> in Thane, or dependable{' '}
              <strong>car leasing services in Raigad</strong>, Jyotirlinga Cars provides vetted drivers, spotless vehicles, and transparent commercial contracts.
            </p>

            {/* Quick Regional Coverage Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Navi Mumbai</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Mumbai City</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Thane District</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Raigad / Panvel</span>
              </span>
            </div>
          </div>

          {/* Six Feature Cards (3-col desktop × 2-col tablet × 1-col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="group relative p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top card accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Icon + Decorative Accent Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md border border-slate-800 group-hover:bg-[#0A1C38] group-hover:scale-105 group-hover:border-amber-400/40 transition-all duration-300">
                        <Icon className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="font-mono text-xs font-extrabold text-slate-300 group-hover:text-amber-600 transition-colors tracking-widest">
                          FEATURE {item.number}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors mb-2.5">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Keyword Indicator */}
                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-amber-800/80 font-semibold truncate">
                      {item.keywordTag}
                    </span>
                    <span className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Trust Action Strip */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0A1C38] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Local Fleet Available Now
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Looking for dependable car rental or long-term leasing?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Reach out to our Koparkhairane dispatch desk for custom proposals and instant vehicle availability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:7038340008"
                className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                Call +91 7038340008
              </a>
              <a
                href="https://wa.me/917038340008?text=Hello%20Jyotirlinga%20Cars%2C%20I%20would%20like%20to%20enquire%20about%20car%20rental%20and%20leasing%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all hover:-translate-y-0.5"
              >
                WhatsApp Quick Chat
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS SECTION
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Common Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {FREQUENT_QUESTIONS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
