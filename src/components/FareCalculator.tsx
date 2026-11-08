import { useState, useMemo } from 'react';
import {
  Car,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Calendar,
  Fuel,
  Users,
  Wrench,
  FileCheck2,
  TrendingDown,
} from 'lucide-react';

export interface LeaseVehicleItem {
  id: string;
  name: string;
  brand: string;
  category: 'hatchback' | 'sedan' | 'muvs' | 'suvs';
  approxMonthlyLease: number; // e.g. 39999
  seats: number;
  fuelType: string;
  transmission: string;
  image: string;
  tagline: string;
  keyFeatures: string[];
  idealFor: string;
  isPopular?: boolean;
}

export const LEASE_CATEGORIES = [
  { id: 'hatchback', label: 'Hatchback', count: 6, minCost: 39999 },
  { id: 'sedan', label: 'Sedan', count: 6, minCost: 46000 },
  { id: 'muvs', label: "MUV's", count: 6, minCost: 54000 },
  { id: 'suvs', label: "SUV's", count: 6, minCost: 60000 },
] as const;

export type LeaseCategoryType = (typeof LEASE_CATEGORIES)[number]['id'];

export const LEASE_CATALOG: Record<LeaseCategoryType, LeaseVehicleItem[]> = {
  hatchback: [
    {
      id: 'maruti-wagonr',
      name: 'Maruti Suzuki WagonR',
      brand: 'Maruti Suzuki',
      category: 'hatchback',
      approxMonthlyLease: 39999,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual',
      image: '/assets/aistudio/wagonar.png',
      tagline: 'Economical Tall-Boy City Hatchback',
      keyFeatures: ['Ultra-Low Running Cost', 'High Headroom & Easy Ingress', '341L Boot Space'],
      idealFor: 'Daily corporate city running, field staff, and budget commutes',
      isPopular: true,
    },
    {
      id: 'tata-tiago',
      name: 'Tata Tiago',
      brand: 'Tata Motors',
      category: 'hatchback',
      approxMonthlyLease: 39999,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AMT',
      image: '/assets/aistudio/tiago.png',
      tagline: 'Safe & Peppy Modern Hatchback',
      keyFeatures: ['4-Star GNCAP Safety', 'Harman Sound System', 'Chilled AC & Strong Body'],
      idealFor: 'Urban professionals, daily office commute, and young families',
      isPopular: false,
    },
    {
      id: 'maruti-swift',
      name: 'Maruti Suzuki Swift',
      brand: 'Maruti Suzuki',
      category: 'hatchback',
      approxMonthlyLease: 42500,
      seats: 5,
      fuelType: 'Petrol',
      transmission: 'Manual / AMT',
      image: '/assets/aistudio/swift.png',
      tagline: 'Iconic Sporty City Performer',
      keyFeatures: ['24+ km/l High Mileage', '6 Airbags Standard', 'Touchscreen Infotainment'],
      idealFor: 'Executive travel, client meetings, and spirited city agility',
      isPopular: true,
    },
    {
      id: 'hyundai-grand-i10',
      name: 'Hyundai Grand i10 Nios',
      brand: 'Hyundai',
      category: 'hatchback',
      approxMonthlyLease: 41000,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AMT',
      image: '/assets/aistudio/i10.png',
      tagline: 'Plush & Refined Urban Hatchback',
      keyFeatures: ['Quiet NVH Cabin Insulation', 'Wireless Phone Charger', 'Rear AC Vents'],
      idealFor: 'Sales executives, corporate visits, and family errands',
      isPopular: false,
    },
    {
      id: 'maruti-baleno',
      name: 'Maruti Suzuki Baleno',
      brand: 'Maruti Suzuki',
      category: 'hatchback',
      approxMonthlyLease: 44500,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AGS',
      image: '/assets/aistudio/baleno.png',
      tagline: 'Premium Wide-Body Hatchback',
      keyFeatures: ['360 View Camera', 'Heads-Up Display (HUD)', 'Surprising Rear Legroom'],
      idealFor: 'Mid-management executives, corporate car lease schemes',
      isPopular: false,
    },
    {
      id: 'hyundai-i20',
      name: 'Hyundai i20',
      brand: 'Hyundai',
      category: 'hatchback',
      approxMonthlyLease: 46999,
      seats: 5,
      fuelType: 'Petrol',
      transmission: 'Manual / IVT',
      image: '/assets/aistudio/i20.png',
      tagline: 'European Styling & Digital Cockpit',
      keyFeatures: ['Bose Premium Audio', 'Electric Sunroof', 'Digital Instrument Cluster'],
      idealFor: 'Senior professionals seeking high refinement in a compact footprint',
      isPopular: false,
    },
  ],
  sedan: [
    {
      id: 'maruti-dzire',
      name: 'Maruti Suzuki Dzire',
      brand: 'Maruti Suzuki',
      category: 'sedan',
      approxMonthlyLease: 47000,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AGS',
      image: '/assets/aistudio/dzire.png',
      tagline: 'Executive Compact Business Sedan',
      keyFeatures: ['Generous Rear Legroom', '378L Boot Capacity', 'Automatic Climate Control'],
      idealFor: 'Corporate executive mobility, airport transit, and inter-city business runs',
      isPopular: true,
    },
    {
      id: 'hyundai-aura',
      name: 'Hyundai Aura',
      brand: 'Hyundai',
      category: 'sedan',
      approxMonthlyLease: 46000,
      seats: 5,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AMT',
      image: '/assets/aistudio/aura.png',
      tagline: 'Modern & Comfortable Sedan',
      keyFeatures: ['Type-C Fast Charging Outlets', 'Cruise Control', 'Silent Cabin Experience'],
      idealFor: 'Banking professionals, corporate shuttles, and comfortable client tours',
      isPopular: false,
    },
    {
      id: 'honda-amaze',
      name: 'Honda Amaze',
      brand: 'Honda',
      category: 'sedan',
      approxMonthlyLease: 49500,
      seats: 5,
      fuelType: 'Petrol',
      transmission: 'Manual / Smooth CVT',
      image: '/assets/aistudio/amaze.png',
      tagline: 'Japanese Engineering & Wide Rear Sofa',
      keyFeatures: ['420L Massive Boot', 'Ultra-Smooth CVT Automatic', 'Plush Cushioned Seats'],
      idealFor: 'Doctors, consultants, and executive family touring',
      isPopular: false,
    },
    {
      id: 'honda-city',
      name: 'Honda City',
      brand: 'Honda',
      category: 'sedan',
      approxMonthlyLease: 68000,
      seats: 5,
      fuelType: 'Petrol / e:HEV Hybrid',
      transmission: 'Manual / CVT',
      image: '/assets/aistudio/city.png',
      tagline: 'The Definitive Executive Sedan Standard',
      keyFeatures: ['Honda Sensing ADAS Suite', 'LaneWatch Camera', 'Premium Leatherette Seats'],
      idealFor: 'C-Suite leaders, corporate directorships, and prestige highway drives',
      isPopular: true,
    },
    {
      id: 'hyundai-verna',
      name: 'Hyundai Verna',
      brand: 'Hyundai',
      category: 'sedan',
      approxMonthlyLease: 72000,
      seats: 5,
      fuelType: 'Turbo Petrol',
      transmission: 'Manual / 7-Speed DCT',
      image: '/assets/aistudio/verna.png',
      tagline: 'Futuristic Fastback Luxury Sedan',
      keyFeatures: ['Ventilated & Heated Front Seats', 'Level 2 ADAS Radar', 'Dual 10.25-inch Screens'],
      idealFor: 'Tech executives, corporate fleet upgrade schemes, and long expressway tours',
      isPopular: false,
    },
    {
      id: 'skoda-slavia',
      name: 'Skoda Slavia',
      brand: 'Skoda',
      category: 'sedan',
      approxMonthlyLease: 75000,
      seats: 5,
      fuelType: 'TSI Turbo Petrol',
      transmission: 'Manual / Automatic',
      image: '/assets/aistudio/slavia.png',
      tagline: 'Solid European Expressway Cruiser',
      keyFeatures: ['5-Star GNCAP Crash Rating', '521L Cavernous Boot', 'High-Speed Stability'],
      idealFor: 'Industrial plant heads, directors, and frequent Mumbai-Pune business circuits',
      isPopular: false,
    },
  ],
  muvs: [
    {
      id: 'maruti-ertiga',
      name: 'Maruti Suzuki Ertiga',
      brand: 'Maruti Suzuki',
      category: 'muvs',
      approxMonthlyLease: 58000,
      seats: 7,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AT',
      image: '/assets/aistudio/ertiga.png',
      tagline: 'Versatile 7-Seater Team & Family MUV',
      keyFeatures: ['Flexible 3-Row Foldable Seats', 'Roof-Mounted AC Blowers', 'Low Operational Costs'],
      idealFor: 'Corporate project teams, site supervisors, and extended family road trips',
      isPopular: true,
    },
    {
      id: 'maruti-fronx',
      name: 'Maruti Suzuki Fronx',
      brand: 'Maruti Suzuki',
      category: 'muvs',
      approxMonthlyLease: 60000,
      seats: 5,
      fuelType: 'Petrol / Turbo',
      transmission: 'Manual / Automatic',
      image: '/assets/aistudio/fronx.png',
      tagline: 'Sporty Urban Coupe Crossover',
      keyFeatures: ['High 190mm Ground Clearance', 'Heads-Up Display', 'Muscular Road Stance'],
      idealFor: 'Young executives, daily Mumbai-Navi Mumbai commute, and stylish personal mobility',
      isPopular: true,
    },
    {
      id: 'tata-nexon',
      name: 'Tata Nexon',
      brand: 'Tata Motors',
      category: 'muvs',
      approxMonthlyLease: 62000,
      seats: 5,
      fuelType: 'Petrol / Diesel / EV',
      transmission: 'Manual / DCA',
      image: '/assets/aistudio/nexon.png',
      tagline: 'Indias Safest 5-Star Compact SUV',
      keyFeatures: ['5-Star BNCAP Crash Rating', '208mm SUV Ground Clearance', '360 HD Camera'],
      idealFor: 'Safety-conscious corporate professionals, industrial engineers, and weekend getaways',
      isPopular: true,
    },
    {
      id: 'kia-carens',
      name: 'Kia Carens',
      brand: 'Kia',
      category: 'muvs',
      approxMonthlyLease: 65000,
      seats: 7,
      fuelType: 'Petrol / Diesel',
      transmission: 'Manual / DCT / AT',
      image: '/assets/aistudio/carens.png',
      tagline: 'Hi-Tech 3-Row Family & Staff Carrier',
      keyFeatures: ['One-Touch Electric Tumble 2nd Row', '6 Airbags Standard', 'Ventilated Front Seats'],
      idealFor: 'Corporate team transfers, executive airport shuttles, and luxury family travel',
      isPopular: false,
    },
    {
      id: 'maruti-xl6',
      name: 'Maruti Suzuki XL6',
      brand: 'Maruti Suzuki',
      category: 'muvs',
      approxMonthlyLease: 62000,
      seats: 6,
      fuelType: 'Petrol / CNG',
      transmission: 'Manual / AT',
      image: '/assets/aistudio/xl6.png',
      tagline: 'Premium 6-Seater with Captain Seats',
      keyFeatures: ['All-Black Leatherette Captain Seats', 'Ventilated Seats', 'UV-Cut Acoustic Glass'],
      idealFor: 'Plant managers, IT management, and comfortable client hospitality',
      isPopular: false,
    },
    {
      id: 'mahindra-bolero-neo',
      name: 'Mahindra Bolero Neo',
      brand: 'Mahindra',
      category: 'muvs',
      approxMonthlyLease: 54000,
      seats: 7,
      fuelType: 'Diesel',
      transmission: 'Manual',
      image: '/assets/aistudio/bolero_neo.png',
      tagline: 'Rugged Ladder-Frame Multi-Utility Carrier',
      keyFeatures: ['High Ground Clearance (180mm)', 'mHawk Diesel Torque', 'Dough-Terrain Toughness'],
      idealFor: 'MIDC industrial plants, construction site logistics, and Raigad / Konkan terrain',
      isPopular: false,
    },
  ],
  suvs: [
    {
      id: 'toyota-innova-crysta',
      name: 'Toyota Innova Crysta',
      brand: 'Toyota',
      category: 'suvs',
      approxMonthlyLease: 82000,
      seats: 7,
      fuelType: 'Diesel',
      transmission: 'Manual',
      image: '/assets/aistudio/innova.png',
      tagline: 'Unmatched Reliability & Captain Comfort',
      keyFeatures: ['Captain Recliner Seats', 'Legendary 2.4L Diesel Engine', 'Supreme Highway Comfort'],
      idealFor: 'Corporate leadership, government delegations, and VIP industrial inspections',
      isPopular: true,
    },
    {
      id: 'toyota-innova-hycross',
      name: 'Toyota Innova Hycross',
      brand: 'Toyota',
      category: 'suvs',
      approxMonthlyLease: 92000,
      seats: 7,
      fuelType: 'Strong Hybrid Petrol',
      transmission: 'e-CVT Automatic',
      image: '/assets/aistudio/innova.png',
      tagline: 'Ultra-Luxury Ottoman Hybrid Lounge',
      keyFeatures: ['Powered Ottoman Lounge Seats', 'Panoramic Sunroof', '21+ km/l Hybrid Mileage'],
      idealFor: 'Managing Directors, international delegates, and luxury long-term corporate lease',
      isPopular: false,
    },
    {
      id: 'hyundai-creta',
      name: 'Hyundai Creta',
      brand: 'Hyundai',
      category: 'suvs',
      approxMonthlyLease: 68000,
      seats: 5,
      fuelType: 'Petrol / Diesel',
      transmission: 'Manual / IVT / DCT',
      image: '/assets/aistudio/creta.png',
      tagline: 'Benchmark Mid-Size Luxury SUV',
      keyFeatures: ['Panoramic Voice Sunroof', 'Level 2 ADAS Active Safety', 'Dual 10.25-inch Touchscreens'],
      idealFor: 'Senior corporate management, business owners, and all-weather touring',
      isPopular: true,
    },
    {
      id: 'kia-seltos',
      name: 'Kia Seltos',
      brand: 'Kia',
      category: 'suvs',
      approxMonthlyLease: 69000,
      seats: 5,
      fuelType: 'Petrol / Diesel / Turbo',
      transmission: 'Manual / iMT / AT',
      image: '/assets/aistudio/seltos.png',
      tagline: 'Dynamic Styling & Tech-Loaded Cockpit',
      keyFeatures: ['Smart Pure Air Purifier', 'Dual-Zone Fully Automatic AC', 'Bose 8-Speaker Audio'],
      idealFor: 'Consultants, directors, and premium corporate car allowances',
      isPopular: false,
    },
    {
      id: 'mahindra-scorpio-n',
      name: 'Mahindra Scorpio-N',
      brand: 'Mahindra',
      category: 'suvs',
      approxMonthlyLease: 84000,
      seats: 7,
      fuelType: 'Diesel / Petrol',
      transmission: 'Manual / 6-Speed AT',
      image: '/assets/aistudio/scorpio_n.png',
      tagline: 'Big Daddy of All-Terrain Road Presence',
      keyFeatures: ['4XPLOR Intelligent Terrain Modes', 'Sony 3D Immersive Audio', 'Commanding High Seating'],
      idealFor: 'Mining, infrastructure plant directors, and heavy-duty highway journeys',
      isPopular: false,
    },
    {
      id: 'tata-sierra-safari',
      name: 'Tata Sierra / Safari',
      brand: 'Tata Motors',
      category: 'suvs',
      approxMonthlyLease: 89000,
      seats: 7,
      fuelType: 'Diesel',
      transmission: 'Manual / Automatic',
      image: '/assets/aistudio/sierra.png',
      tagline: 'Flagship 7-Seater Executive SUV',
      keyFeatures: ['Land Rover D8 Derived Architecture', 'Ventilated 1st & 2nd Row Seats', 'Full ADAS Radar'],
      idealFor: 'Corporate CXOs, dignitaries, and long-distance executive interstate runs',
      isPopular: true,
    },
  ],
};

interface FareCalculatorProps {
  onTransferToQuote: (details: {
    service: string;
    carName: string;
    estimatedFare: number;
    notes: string;
  }) => void;
}

export default function FareCalculator({ onTransferToQuote }: FareCalculatorProps) {
  // Category tab state: hatchback is default as requested
  const [activeCategory, setActiveCategory] = useState<LeaseCategoryType>('hatchback');

  // Selected vehicle for detailed breakdown
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('maruti-wagonr');

  // Interactive lease tenure selection
  const [leaseTenureMonths, setLeaseTenureMonths] = useState<12 | 24 | 36>(24);

  // Optional Chauffeur service toggle
  const [includeChauffeur, setIncludeChauffeur] = useState<boolean>(false);

  // Active category vehicles list (6 vehicles)
  const currentVehicles = LEASE_CATALOG[activeCategory] || LEASE_CATALOG.hatchback;

  // Selected vehicle item
  const selectedVehicle = useMemo(() => {
    const found = currentVehicles.find((v) => v.id === selectedVehicleId);
    if (found) return found;
    return currentVehicles[0];
  }, [currentVehicles, selectedVehicleId]);

  // When changing category, set the selected vehicle to the first car in that category
  const handleCategoryChange = (category: LeaseCategoryType) => {
    setActiveCategory(category);
    const categoryCars = LEASE_CATALOG[category];
    if (categoryCars && categoryCars.length > 0) {
      setSelectedVehicleId(categoryCars[0].id);
    }
  };

  // Calculate monthly lease with tenure factor and chauffeur add-on
  const leaseCalculation = useMemo(() => {
    const baseMonthly = selectedVehicle.approxMonthlyLease;
    // Longer tenure gives slight per-month optimization
    let tenureDiscountFactor = 1.0;
    if (leaseTenureMonths === 36) tenureDiscountFactor = 0.94; // 6% discount for 3-yr lease
    if (leaseTenureMonths === 12) tenureDiscountFactor = 1.08; // 8% adjustment for short 1-yr lease

    const adjustedCarLease = Math.round(baseMonthly * tenureDiscountFactor);
    const chauffeurCost = includeChauffeur ? 22000 : 0; // standard full-time verified chauffeur
    const finalMonthlyCost = adjustedCarLease + chauffeurCost;

    return {
      baseMonthly,
      adjustedCarLease,
      chauffeurCost,
      finalMonthlyCost,
      summaryText: `${selectedVehicle.name} (${activeCategory.toUpperCase()}) - ${leaseTenureMonths} Months Lease at approx ₹${finalMonthlyCost.toLocaleString('en-IN')}/mo${includeChauffeur ? ' (incl. dedicated verified chauffeur)' : ' (self-managed driver / company driver)'}`,
    };
  }, [selectedVehicle, activeCategory, leaseTenureMonths, includeChauffeur]);

  const handleSendWhatsAppQuote = () => {
    const text = `Hello Jyotirling Cars,%0A%0A*Car Lease Enquiry*%0A- *Vehicle:* ${encodeURIComponent(selectedVehicle.name)}%0A- *Category:* ${encodeURIComponent(activeCategory.toUpperCase())}%0A- *Tenure:* ${leaseTenureMonths} Months%0A- *Chauffeur Required:* ${includeChauffeur ? 'Yes (Full-time)' : 'No (Vehicle Only)'}%0A- *Approx Lease Rate:* Rs. ${leaseCalculation.finalMonthlyCost.toLocaleString('en-IN')}/month%0A%0AWe require this car on lease in Mumbai / Navi Mumbai / Thane / Raigad. Please share official quotation and availability.`;
    window.open(`https://wa.me/917038340008?text=${text}`, '_blank');
  };

  const handleTransferToQuoteForm = (vehicleToQuote?: LeaseVehicleItem) => {
    const targetVehicle = vehicleToQuote || selectedVehicle;
    onTransferToQuote({
      service: `Car Lease (${activeCategory.toUpperCase()})`,
      carName: targetVehicle.name,
      estimatedFare: targetVehicle.approxMonthlyLease,
      notes: `${leaseTenureMonths} Months Lease plan for ${targetVehicle.name}. Starting approx ₹${targetVehicle.approxMonthlyLease.toLocaleString('en-IN')}/month with maintenance and insurance.`,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Vehicles on Lease We Provide
          </h2>

          <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
            We will get whichever car you want, starting from just Rupees 39,999.
          </p>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
            Available across Navi Mumbai, Mumbai, Thane, and Raigad. Zero down payment, full maintenance & 100% tax-deductible options.
          </p>
        </div>

        {/* 4 Interactive Category Tabs: Hatchback, Sedan, MUV's, SUV's */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="p-1.5 sm:p-2 bg-slate-200/80 rounded-2xl border border-slate-300/70 grid grid-cols-2 sm:grid-cols-4 gap-1.5 shadow-xs">
            {LEASE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A1C38] text-white shadow-md ring-2 ring-amber-400/50'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/70'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="flex items-center gap-1.5">
                    <Car className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className="text-sm font-extrabold">{cat.label}</span>
                  </span>
                  <span
                    className={`text-[11px] font-mono ${
                      isActive ? 'text-amber-300 font-semibold' : 'text-slate-500'
                    }`}
                  >
                    From ₹{cat.minCost.toLocaleString('en-IN')}/mo
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Vehicle Cards Grid for the Active Category */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>
                  {LEASE_CATEGORIES.find((c) => c.id === activeCategory)?.label} Lease Fleet
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
                  6 Models Available
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Click any vehicle to preview detailed monthly lease calculations or request instant quotes.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Includes Free Scheduled Maintenance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVehicles.map((vehicle, idx) => {
              const isSelected = vehicle.id === selectedVehicle.id;

              return (
                <div
                  key={vehicle.id}
                  onClick={() => setSelectedVehicleId(vehicle.id)}
                  className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/40 -translate-y-1'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Badge bar */}
                  <div className="p-4 sm:p-5 pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {vehicle.brand}
                        </span>
                      </div>

                      {vehicle.isPopular && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md shadow-2xs">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {vehicle.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{vehicle.tagline}</p>
                  </div>

                  {/* Vehicle Image */}
                  <div className="relative px-4 py-2 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center min-h-[160px]">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      loading="lazy"
                      className="max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-106 drop-shadow-md"
                    />
                  </div>

                  {/* Vehicle Specs Chips */}
                  <div className="px-4 sm:px-5 py-3 border-t border-slate-100 bg-slate-50/70">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 font-medium">
                      <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-200">
                        <Users className="w-3 h-3 text-slate-400" />
                        {vehicle.seats} Seats
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-200">
                        <Fuel className="w-3 h-3 text-slate-400" />
                        {vehicle.fuelType}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-200">
                        <Car className="w-3 h-3 text-slate-400" />
                        {vehicle.transmission}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="mt-3 space-y-1">
                      {vehicle.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="p-4 sm:p-5 pt-3 border-t border-slate-200 bg-white">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Starting just at
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black font-mono text-[#0A1C38] tracking-tight">
                            ₹{vehicle.approxMonthlyLease.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/ month*</span>
                        </div>
                      </div>

                      <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                        Zero CapEx
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVehicleId(vehicle.id);
                          handleTransferToQuoteForm(vehicle);
                        }}
                        className="py-2.5 px-3 bg-[#0A1C38] hover:bg-[#07152B] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <a
                        href={`https://wa.me/917038340008?text=Hello%20Jyotirling%20Cars%2C%20I%20am%20interested%20in%20leasing%20the%20${encodeURIComponent(vehicle.name)}%20at%20approx%20Rs.%20${vehicle.approxMonthlyLease}%2Fmonth.%20Please%20share%20quotation.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="py-2.5 px-3 bg-[#F4B41A] hover:bg-[#E0A212] text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <MessageSquare className="w-3 h-3 text-slate-950" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Lease Customizer & Inclusions Box for the Selected Car */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-md overflow-hidden mb-12">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0A1C38] to-slate-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Car summary */}
              <div className="lg:col-span-4 flex items-center gap-5">
                <div className="w-24 h-20 sm:w-28 sm:h-24 bg-white/10 rounded-2xl p-2 shrink-0 flex items-center justify-center border border-white/10 backdrop-blur-xs">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono text-amber-400 font-bold tracking-wider">
                    Currently Selected
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedVehicle.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedVehicle.seats} Seater · {selectedVehicle.fuelType} · {selectedVehicle.transmission}
                  </p>
                </div>
              </div>

              {/* Middle Column: Tenure & Chauffeur selector */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Lease Tenure
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                    {[12, 24, 36].map((months) => (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setLeaseTenureMonths(months as 12 | 24 | 36)}
                        className={`py-2 text-xs font-bold rounded-lg transition-all ${
                          leaseTenureMonths === months
                            ? 'bg-amber-400 text-slate-950 shadow-sm'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {months} Mo
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Driver Option
                  </label>
                  <button
                    type="button"
                    onClick={() => setIncludeChauffeur(!includeChauffeur)}
                    className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${
                      includeChauffeur
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{includeChauffeur ? '✓ Verified Chauffeur' : '+ Add Full-Time Driver'}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {includeChauffeur ? '₹22,000/mo' : 'Optional'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Rate and direct inquiry */}
              <div className="lg:col-span-3 text-left lg:text-right border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Estimated Total
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-amber-400 tabular-nums">
                  ₹{leaseCalculation.finalMonthlyCost.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">per month (excl. GST)</div>

                <div className="mt-3 flex gap-2 justify-start lg:justify-end">
                  <button
                    type="button"
                    onClick={handleSendWhatsAppQuote}
                    className="px-4 py-2 bg-[#F4B41A] hover:bg-[#E0A212] text-slate-950 font-extrabold text-xs rounded-lg transition-transform hover:scale-102 shadow-sm flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Value inclusions checklist */}
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Free Maintenance & Oil Servicing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Dep Comprehensive Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Immediate Standby Replacement Car</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>100% Tax Deductible Monthly GST Invoicing</span>
              </div>
            </div>
          </div>
        </div>

        {/* "Whichever car you want" Custom Promise Card */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0A1C38] via-slate-900 to-[#0A1C38] p-5 sm:p-8 text-white overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800 px-3 py-1 rounded-full mb-3">
                Custom Fleet Procurement Guarantee
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                Do you have a specific car, color, or model in mind?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Whether you need a Mercedes-Benz, BMW, Skoda Octavia, Mahindra Thar, or a fleet of 20 commercial EVs, we will source, finance, insure, and deliver whichever car you want starting from just Rupees 39,999.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:7038340008"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#0A1C38]" />
                <span>Call +91 7038340008</span>
              </a>

              <button
                type="button"
                onClick={() => handleTransferToQuoteForm()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F4B41A] text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-[#E0A212] transition-colors shadow-md whitespace-nowrap"
              >
                <span>Request Custom Car Lease</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
