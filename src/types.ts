export interface WinchService {
  id: string;
  title: string;
  description: string;
  badge: string;
  image?: string;
}

export interface CoverageArea {
  id: string;
  name: string;
  eta: string;
  availableTrucks: number;
}

export interface Testimonial {
  id: string;
  author: string;
  car: string;
  location: string;
  comment: string;
  rating: number;
  timeAgo: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  heroHeadline: string;
  heroSubheadline: string;
  emergencyNotice: string;
  workingHours: string;
  averageEtaMinutes: number;
  services: WinchService[];
  areas: CoverageArea[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}

export interface EmergencyRequest {
  fromLocation: string; // من
  toLocation: string;   // إلي
  phone: string;        // رقم الهاتف
  carType: string;      // نوع السياره
  condition: 'عطل' | 'حادث'; // الحاله عطل ولا حادث
  notes?: string;
}
