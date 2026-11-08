import { ShieldCheck, ArrowLeft, FileText, RotateCcw, Phone, Mail } from 'lucide-react';

interface TermsPageProps {
  onBackToHome: () => void;
}

export default function TermsPage({ onBackToHome }: TermsPageProps) {
  // Ensure view starts at top immediately without scroll lag
  window.scrollTo({ top: 0, behavior: 'instant' });

  const termsPoints = [
    {
      num: '1',
      title: 'Booking Confirmation',
      text: 'All bookings are subject to vehicle availability and written confirmation from the Company.',
    },
    {
      num: '2',
      title: 'Pricing & Payment',
      text: 'Payments must be made as per the agreed quotation. Applicable GST and additional charges will be charged separately.',
    },
    {
      num: '3',
      title: 'Advance & Security Deposit',
      text: 'Advance payments and security deposits, wherever applicable, must be paid before service commencement.',
    },
    {
      num: '4',
      title: 'Cancellation',
      text: 'Cancellation charges and refund conditions will be applicable as communicated in the quotation or service agreement.',
    },
    {
      num: '5',
      title: 'Vehicle Usage',
      text: 'Vehicles must be used responsibly and only for lawful purposes. Any unauthorised use is strictly prohibited.',
    },
    {
      num: '6',
      title: 'Additional Charges',
      text: 'Extra kilometres, additional hours, tolls, parking, permits and other expenses will be charged as per the agreed terms.',
    },
    {
      num: '7',
      title: 'Damage & Accidents',
      text: 'Any accident, damage or theft must be reported immediately. Financial responsibility will be determined according to the circumstances, insurance coverage and applicable agreement.',
    },
    {
      num: '8',
      title: 'Traffic Fines',
      text: 'Traffic fines and penalties arising from the customer’s use of the vehicle shall be payable by the responsible customer.',
    },
    {
      num: '9',
      title: 'Maintenance',
      text: 'Vehicle maintenance responsibilities will be specified in the quotation or service agreement.',
    },
    {
      num: '10',
      title: 'Long-Term Contracts',
      text: 'Monthly and long-term leasing services will be governed by a separate written agreement specifying duration, payment, kilometre limits and termination conditions.',
    },
    {
      num: '11',
      title: 'Service Availability',
      text: 'Services are subject to operational conditions, vehicle availability and applicable laws.',
    },
    {
      num: '12',
      title: 'Privacy',
      text: 'Customer information will be handled in accordance with applicable privacy and data protection laws.',
    },
    {
      num: '13',
      title: 'Legal Jurisdiction',
      text: 'These terms are governed by the laws of India. Subject to applicable law, competent courts in Navi Mumbai, Maharashtra, shall have jurisdiction.',
    },
  ];

  const cancellationPoints = [
    {
      num: '1',
      text: 'All cancellation requests must be submitted in writing.',
    },
    {
      num: '2',
      text: 'Cancellation charges, if applicable, will be communicated at the time of booking.',
    },
    {
      num: '3',
      text: 'Advance payments and refunds will be governed by the agreed booking terms.',
    },
    {
      num: '4',
      text: 'Monthly and long-term contracts will follow the cancellation conditions mentioned in the signed agreement.',
    },
    {
      num: '5',
      text: 'Refunds, if approved, will be processed within 7–10 working days.',
    },
    {
      num: '6',
      text: 'Security deposits will be refunded after adjusting valid outstanding dues or verified damages.',
    },
    {
      num: '7',
      text: 'If the Company cancels a confirmed booking without providing an alternative, the amount paid for the affected service will be refunded, subject to applicable law.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#0A1C38] text-white p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-500/30">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#F4B41A] text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full mb-3">
              Official Policy Documentation
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Terms &amp; Conditions &amp; Policies
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Jyotirling Car Leasing &amp; Mobility — Operational Guidelines &amp; Cancellation Terms
            </p>
          </div>

          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all border border-white/20 shrink-0 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4 text-[#F4B41A]" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-10 space-y-10 text-sm sm:text-base leading-relaxed text-slate-700">
          {/* Section 1: TERMS & CONDITIONS */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0A1C38] text-amber-400 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                  Terms &amp; Conditions
                </h2>
                <span className="text-xs text-slate-500">Corporate &amp; Individual Rental Guidelines</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {termsPoints.map((item) => (
                <div
                  key={item.num}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/50 transition-colors flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0A1C38] text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold block sm:inline sm:mr-1.5">
                      {item.title}:
                    </strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Acceptance Note */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-amber-950 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span>By booking or using our services, customers agree to the applicable Terms &amp; Conditions.</span>
            </div>
          </section>

          {/* Section 2: CANCELLATION & REFUND POLICY */}
          <section className="space-y-6 pt-4 border-t border-slate-200">
            <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0A1C38] text-amber-400 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                  Cancellation &amp; Refund Policy
                </h2>
                <span className="text-xs text-slate-500">Guidelines for Booking Modifications &amp; Refunds</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {cancellationPoints.map((item) => (
                <div
                  key={item.num}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/50 transition-colors flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0A1C38] text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Footer in Terms */}
          <div className="pt-6 border-t border-slate-200 mt-8 bg-slate-50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-xs sm:text-sm text-center sm:text-left">
              <div className="font-bold text-slate-900">Have questions regarding our terms or contracts?</div>
              <div className="text-slate-600 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-2">
                <a href="tel:7038340008" className="flex items-center gap-1 hover:text-amber-700 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>+91 7038340008</span>
                </a>
                <a href="mailto:info@jyotirlingcarsleasing.com" className="flex items-center gap-1 hover:text-amber-700 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>info@jyotirlingcarsleasing.com</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={onBackToHome}
              className="py-3 px-6 bg-[#0A1C38] hover:bg-[#07152B] text-white font-extrabold text-xs rounded-xl shadow-md transition-all hover:scale-102 cursor-pointer shrink-0"
            >
              Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
