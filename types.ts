// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Services object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    description?: string;
    price?: string;
    icon?: string;
    image?: CosmicImage;
    display_order?: number;
  };
}

// Trust points object type
export interface TrustPoint extends CosmicObject {
  type: 'trust-points';
  metadata: {
    heading?: string;
    description?: string;
    icon?: string;
    display_order?: number;
  };
}

// Contact links object type
export interface ContactLink extends CosmicObject {
  type: 'contact-links';
  metadata: {
    label?: string;
    url?: string;
    link_type?: string;
    primary_button?: boolean;
    display_order?: number;
  };
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTrustPoint(obj: CosmicObject): obj is TrustPoint {
  return obj.type === 'trust-points';
}

export function isContactLink(obj: CosmicObject): obj is ContactLink {
  return obj.type === 'contact-links';
}