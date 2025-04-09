import { USER_ROLES, ONBOARDING_STEPS, RESOURCE_TYPES } from '@/constants/ui';

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];
export type OnboardingStep = typeof ONBOARDING_STEPS[keyof typeof ONBOARDING_STEPS];
export type ResourceType = typeof RESOURCE_TYPES[keyof typeof RESOURCE_TYPES];

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  onboardingCompleted: boolean;
  onboardingProgress: OnboardingStep[];
  createdAt: string;
  updatedAt: string;
}

export interface OnboardingData {
  userId: string;
  step: OnboardingStep;
  data: Record<string, any>;
  completedAt: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  workbookUrl: string;
  order: number;
  isCompleted?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  url: string;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  email: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
  priority: 'low' | 'medium' | 'high';
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
  updatedAt: string;
} 