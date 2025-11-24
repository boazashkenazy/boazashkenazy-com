export interface Article {
  id: string;
  number: string;
  title: string;
  link: string;
}

export interface SocialProofLogo {
  name: string;
  url?: string; // Optional URL for logo image
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string[];
  ctaText: string;
  ctaAction: () => void;
  inputType?: 'email' | 'none';
}
