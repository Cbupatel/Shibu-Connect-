export interface Coach {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  primarySport: string;
  category: string;
  experience: number;
  monthlyFee: number;
  certifications: string;
  bio: string;
  location: string;
  languages: string;
  photoUrl: string;
  rating?: number;
  reviewsCount?: number;
  isVerified?: boolean;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  iconName: string;
}
