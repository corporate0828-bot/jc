/**
 * Google Analytics 4 (GA4) Integration Utility
 * Measurement ID: G-JE3BEV5GT0
 *
 * NOTE: Adheres strictly to privacy regulations.
 * NEVER sends PII (personally identifiable information) like names, phone numbers, or email addresses.
 */

export const GA_MEASUREMENT_ID = 'G-JE3BEV5GT0';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Safe invocation of gtag
 */
export function gtagSafe(...args: any[]): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag(...args);
    } catch (e) {
      // Fail silently in development/blocked environments
    }
  }
}

/**
 * Record a page_view event for SPA routing
 */
export function trackPageView(path?: string, title?: string): void {
  if (typeof window === 'undefined') return;
  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  const pageLocation = window.location.origin + pagePath;

  gtagSafe('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Track phone call initiation
 */
export function trackPhoneClick(locationLabel: string): void {
  gtagSafe('event', 'click_phone_call', {
    event_category: 'engagement',
    event_label: locationLabel,
    destination: 'tel:7038340008',
  });
}

/**
 * Track WhatsApp conversation initiation
 */
export function trackWhatsAppClick(source: string, vehicleName?: string): void {
  gtagSafe('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: source,
    vehicle_name: vehicleName || undefined,
  });
}

/**
 * Track quote / enquiry button clicks
 */
export function trackQuoteButtonClick(ctaLabel: string, context?: string): void {
  gtagSafe('event', 'click_quote_button', {
    event_category: 'lead_generation',
    event_label: ctaLabel,
    context: context || undefined,
  });
}

/**
 * Track car details view or selection
 */
export function trackVehicleView(vehicle: {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  price?: number;
}): void {
  gtagSafe('event', 'view_item', {
    currency: 'INR',
    value: vehicle.price || undefined,
    items: [
      {
        item_id: vehicle.id,
        item_name: vehicle.name,
        item_brand: vehicle.brand || 'Jyotirling Cars',
        item_category: vehicle.category || 'Car Lease',
        price: vehicle.price || undefined,
      },
    ],
  });
}

/**
 * Track contact form submission (No PII)
 */
export function trackFormSubmission(data: {
  service: string;
  carName: string;
  numCars: number;
  channel: 'whatsapp' | 'direct_inquiry';
  estimatedTotal?: number;
}): void {
  gtagSafe('event', 'generate_lead', {
    service_type: data.service,
    vehicle_requested: data.carName,
    quantity: data.numCars,
    submission_channel: data.channel,
    currency: 'INR',
    value: data.estimatedTotal || undefined,
  });
}

/**
 * Global delegated click listener for automatic phone and WhatsApp click tracking
 */
export function initAnalyticsAutoTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (event: MouseEvent) => {
    const target = (event.target as HTMLElement)?.closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';

    // Phone clicks
    if (href.startsWith('tel:')) {
      const location =
        target.getAttribute('title') ||
        target.getAttribute('aria-label') ||
        target.textContent?.trim() ||
        'phone_link';
      trackPhoneClick(location.slice(0, 50));
      return;
    }

    // WhatsApp clicks
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      const source =
        target.getAttribute('title') ||
        target.getAttribute('aria-label') ||
        target.textContent?.trim() ||
        'whatsapp_link';
      trackWhatsAppClick(source.slice(0, 50));
      return;
    }
  };

  document.addEventListener('click', handleGlobalClick, { passive: true });
  return () => {
    document.removeEventListener('click', handleGlobalClick);
  };
}
