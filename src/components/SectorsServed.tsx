import React from 'react';
import {
  Building2,
  Landmark,
  Factory,
  Hotel,
  GraduationCap,
  Users,
  KeyRound,
  CheckCircle2,
} from 'lucide-react';

interface SectorsServedProps {
  onSelectSector: (sectorName: string) => void;
}

export const SECTORS_DATA = [
  {
    id: 'corporate',
    title: 'IT / Corporate companies',
    tag: 'Corporate',
    icon: Building2,
    badge: 'MNCs & IT Parks',
    description: 'Executive mobility, leadership pickups, daily employee cab contracts, and client delegations across BKC, Powai, and Navi Mumbai.',
    highlights: ['Monthly consolidated GST billing', 'Standby replacement cars in 60 mins', 'Dedicated account manager'],
    sampleUse: 'Directors, Senior Executives & Client Delegations',
  },
  {
    id: 'individual',
    title: 'Self Drive, Individual Travel',
    tag: 'Individual',
    icon: Users,
    badge: 'Tours & Events',
    description: 'Comfortable family vacations, wedding guest fleets, weekend trips to Lonavala or Alibaug, and self-drive individual mobility.',
    highlights: ['Spacious 7-seater MUVs with luggage carriers', 'Patient, courteous family chauffeurs', 'Transparent per-km and flat pricing'],
    sampleUse: 'Family Outstation, Weekend Trips & Individual Travel',
  },
  {
    id: 'industrial',
    title: 'Manufacturing / MIDC companies',
    tag: 'Industrial',
    icon: Factory,
    badge: 'TTC, Taloja & Rabale',
    description: 'Heavy-duty transport for factory staff, plant engineers, shift supervisors, and management visits in Navi Mumbai and Pune industrial belts.',
    highlights: ['24/7 round-the-clock shift coverage', 'Factory gate pickup & drops', 'Punctual transit in industrial zones'],
    sampleUse: 'Plant Managers, Shift Staff & Site Engineers',
  },
  {
    id: 'government',
    title: 'Banks and financial companies',
    tag: 'Finance',
    icon: Landmark,
    badge: 'Protocol & Official Duty',
    description: 'Protocol-compliant vehicles, financial leadership transit, institutional meetings, official inspections, and corporate banking fleet support.',
    highlights: ['Vetted chauffeurs with police verification', 'Spotless white Innova & Sedan fleet', 'Duty slip logbook management'],
    sampleUse: 'Banking Executives, Auditing Teams & Official Visits',
  },
  {
    id: 'hotels',
    title: 'Pharmaceutical / Logistic companies',
    tag: 'Pharma / Logistics',
    icon: Hotel,
    badge: 'Supply Chain & Dispatch',
    description: 'Reliable transport for pharmaceutical representatives, logistic supervisors, airport transfers, and distribution hub connectivity.',
    highlights: ['Uniformed, English & Hindi fluent chauffeurs', 'Meet & greet at Mumbai CSMIA T1/T2', 'Luggage assistance & pristine sanitization'],
    sampleUse: 'Pharma Field Teams, Logistic Supervisors & Executive Transit',
  },
  {
    id: 'schools',
    title: 'Industrial companies / Private offices',
    tag: 'Offices',
    icon: GraduationCap,
    badge: 'Private Workspaces',
    description: 'Safe and dependable conveyance for management teams, private office staff, corporate auditors, and daily business itineraries.',
    highlights: ['Strict adherence to safety guidelines', 'Speed-governed, clean vehicles', 'Consistent fixed-time daily schedules'],
    sampleUse: 'Management Conveyance, Auditors & Private Office Visits',
  },
  {
    id: 'self-drive',
    title: 'Personal Car Rental',
    tag: 'Personal',
    icon: KeyRound,
    badge: 'Independent Mobility',
    description: 'Enjoy the freedom of personal travel with our well-maintained, sanitized personal car rental fleet. Flexible daily, weekly, and monthly packages.',
    highlights: ['Doorstep delivery & pickup in Navi Mumbai', 'Clean documentation & insurance', 'Zero hidden charges, transparent fuel terms'],
    sampleUse: 'Personal Commute, Weekend Roadtrips & Flexible Use',
  },
];

const WHAT_WE_SERVE_POINTS = [
  'Corporate Car Leasing',
  'Monthly Car Leasing',
  'Long-Term Car Leasing',
  'Corporate Employee Transportation',
  'Car Rental',
  'Tour & Travels',
  'Local & Outstation Trips',
];

export default function SectorsServed({ onSelectSector }: SectorsServedProps) {
  return (
    <>
      {/* Who We Serve Section */}
      <section id="sectors" className="py-20 bg-slate-100 border-b border-slate-200 scroll-mt-20 relative">
        <div id="who-we-serve" className="absolute -top-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                Who We Serve
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                We Provide Dedicated Mobility Services To
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Tailored vehicle packages, dedicated fleet management, and transparent terms designed specifically for each sector’s operational requirements.
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              <span>7 Specialized Verticals</span>
              <span className="mx-2 text-slate-300">·</span>
              <span className="text-amber-700 font-semibold">Chauffeur-Driven &amp; Self-Drive</span>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SECTORS_DATA.map((sector) => {
              const Icon = sector.icon;
              const isSelfDrive = sector.id === 'self-drive';

              return (
                <article
                  key={sector.id}
                  onClick={() => onSelectSector(sector.title)}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group cursor-pointer ${
                    isSelfDrive
                      ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white border-slate-800 shadow-md md:col-span-2 xl:col-span-2'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl ${
                          isSelfDrive
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white transition-colors'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isSelfDrive
                            ? 'bg-slate-800 text-amber-400 border border-slate-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {sector.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-extrabold tracking-tight mb-2 ${
                        isSelfDrive ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {sector.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                        isSelfDrive ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {sector.description}
                    </p>
                  </div>

                  <div>
                    <div className={`space-y-1 mb-4 pt-3 border-t ${isSelfDrive ? 'border-slate-800' : 'border-slate-100'}`}>
                      {sector.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-[11px]">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelfDrive ? 'text-amber-400' : 'text-emerald-600'}`} />
                          <span className={isSelfDrive ? 'text-slate-300' : 'text-slate-600'}>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className={`text-[11px] font-medium ${isSelfDrive ? 'text-slate-400' : 'text-slate-500'}`}>
                        {sector.sampleUse}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1 ${isSelfDrive ? 'text-amber-400' : 'text-amber-600'}`}>
                        Enquire →
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Serve Section (4x2 Grid of Points without descriptions) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              What We Serve
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Mobility Offerings
            </h2>
          </div>

          {/* 4x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_WE_SERVE_POINTS.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-amber-400/60 rounded-xl p-5 flex items-center gap-4 transition-all shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A1C38] text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  0{index + 1}
                </div>
                <div className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
