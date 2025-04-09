export const COLORS = {
  background: '#FFFFFF',
  primary: '#2C3E50',
  accent: '#000000',
  text: {
    primary: '#2C3E50',
    secondary: '#64748B',
    muted: '#94A3B8',
  },
  border: '#E2E8F0',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: 'Anton',
    subheading: 'Archivo Black',
    body: 'Montserrat',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
} as const;

export const LAYOUT = {
  maxWidth: '1200px',
  containerPadding: '1rem',
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  },
} as const;

export const USER_ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin',
} as const;

export const ONBOARDING_STEPS = {
  OBJECTIVES: 'objectives',
  CURRENT_OFFER: 'current_offer',
  IDEAL_CLIENT: 'ideal_client',
  POSITIONING: 'positioning',
  BRANDING: 'branding',
} as const;

export const RESOURCE_CATEGORIES = {
  OFFERS: 'Offres',
  CONTENT: 'Contenu',
  FUNNEL: 'Tunnel',
  AUTOMATION: 'Automations',
  FINANCE: 'Finance',
} as const;

export const RESOURCE_TYPES = {
  PDF: 'pdf',
  VIDEO: 'video',
  TEMPLATE: 'template',
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Onboarding', path: '/onboarding' },
  ],
} as const; 