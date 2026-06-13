import { Coach, ResourceArticle } from "./types";

export const PRELOADED_COACHES: Coach[] = [
  {
    id: "1",
    fullName: "Coach Sarah Jenkins",
    email: "sarah.jenkins@performance.com",
    mobile: "+1 (555) 732-9012",
    primarySport: "Track & Field",
    category: "Strength & Conditioning",
    experience: 8,
    monthlyFee: 250,
    certifications: "CSCS, NASM-PES, Precision Nutrition L1",
    bio: "Passionate about building explosive power, functional speed, and metabolic conditioning in track events. Over 40 collegiate athletes trained to national qualifications.",
    location: "Eugene, OR",
    languages: "English, Spanish",
    photoUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    reviewsCount: 38,
    isVerified: true
  },
  {
    id: "2",
    fullName: "Coach Marcus Vance",
    email: "m.vance@beastmode.com",
    mobile: "+1 (555) 438-1920",
    primarySport: "Football",
    category: "Strength & Conditioning",
    experience: 12,
    monthlyFee: 300,
    certifications: "CSCS, USAW Level 2, FMS Certified",
    bio: "Ex-NFL athletic performance consultant specializing in functional hypertrophy, speed mechanics, and injury risk reduction for contact sport athletes.",
    location: "Austin, TX",
    languages: "English",
    photoUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviewsCount: 54,
    isVerified: true
  },
  {
    id: "3",
    fullName: "Coach Elena Rostova",
    email: "elena@aquacore.com",
    mobile: "+1 (555) 831-4500",
    primarySport: "Swimming",
    category: "Technical/Skills",
    experience: 15,
    monthlyFee: 280,
    certifications: "ASCA Level 4, Master Swim Coach",
    bio: "Elite swim coaching featuring video bio-mechanics analysis and customized aerobic pacing schedules. Trained 3 Olympic Trials qualifiers.",
    location: "Stanford, CA",
    languages: "English, Russian",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    reviewsCount: 42,
    isVerified: true
  },
  {
    id: "4",
    fullName: "Coach David Kim",
    email: "david.kim@courtvision.com",
    mobile: "+1 (555) 309-8811",
    primarySport: "Basketball",
    category: "Technical/Skills",
    experience: 7,
    monthlyFee: 220,
    certifications: "FIBA licensed coach, Nike Academy Instructor",
    bio: "Specializing in high-intensity guard work, footwork detail, and decision-making development. Former Division I player with a master's in Sports Coaching.",
    location: "Chicago, IL",
    languages: "English, Korean",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    reviewsCount: 29,
    isVerified: true
  },
  {
    id: "5",
    fullName: "Dr. Sophia Martinez",
    email: "sophia.m@mindsetathlete.com",
    mobile: "+1 (555) 902-1244",
    primarySport: "Tennis",
    category: "Mental Performance",
    experience: 10,
    monthlyFee: 320,
    certifications: "Ph.D. Sports Psychology, CMPC Practitioner",
    bio: "Assisting high-performance players in mastering their inner game. Specializes in anxiety management, focus optimization under pressure, and elite visualization scripts.",
    location: "Miami, FL",
    languages: "English, Spanish, French",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviewsCount: 61,
    isVerified: true
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: "art1",
    category: "STRENGTH & CONDITIONING",
    title: "Periodization Protocols for Summer Peak Performance",
    readTime: "7 min read",
    excerpt: "Learn how to structure macrocycles to ensure your athletes hit peak speed and maximum load capacities right on target for championships.",
    iconName: "TrendingUp",
    content: "An elite strength program is nothing without a systematic timeline. Discover the strategic progression of transitioning athletes from hyper-trophy phases into pure neurological power and eventually high-frequency rate of force development (RFD)."
  },
  {
    category: "NUTRITION & RECOVERY",
    id: "art2",
    title: "Optimizing Glycogen Re-Synthesis Post HIIT Workout",
    readTime: "5 min read",
    excerpt: "The critical 45-minute window is a myth, but nutrient ratios aren't. Read our comprehensive guide on optimal carb-to-protein ratios for athletic longevity.",
    iconName: "Flame",
    content: "Providing the human body with optimal glycogen restoration requires precise carbohydrate chains coupled with fast-absorbing whey or vegan proteins. Learn how to advise competitors on prehydrating and fueling according to precise body weight formulas."
  },
  {
    category: "MENTAL PERFORMANCE",
    id: "art3",
    title: "Developing 'Micro-Focus' Under High-Stakes Pressure",
    readTime: "10 min read",
    excerpt: "How championship athletes handle visual and auditory distractions during key moments. Practical visualization and bio-breathing protocols included.",
    iconName: "Brain",
    content: "Cognitive control under 120 beats-per-minute involves specific neural pathways. Use these situational drills to force athletes to respond exclusively to primary stimulus cues while suppressing adrenaline-induced visual tunneling."
  },
  {
    category: "TECH & RUNTIME TRACKING",
    id: "art4",
    title: "Using Biomechanics Sensors for Vertical Jump Correction",
    readTime: "6 min read",
    excerpt: "A look at IMU acceleration sensors, real-time feedback loops, and how to detect small kinetic energy leaks during the deceleration load phase.",
    iconName: "Zap",
    content: "Modern athletic optimization is moving towards direct physical sensors. Discover how to overlay acceleration angles with high-frequency 240FPS footage to correct foot strike alignment in real-time."
  }
];

export const PRICING_TIERS = [
  {
    name: "Athlete Basic",
    price: "0",
    subtitle: "For individual athletes discovery",
    features: [
      "Access to browse verified elite coaches",
      "Send up to 3 application inquiries per month",
      "View shared public performance libraries",
      "Standard support channels"
    ],
    buttonText: "Start Scouting",
    badge: "Free"
  },
  {
    name: "Pro Coach",
    price: "49",
    subtitle: "For independent coaches growing their roster",
    features: [
      "Fully verified, high-visibility public profile",
      "Unlimited inquiry receipts from potential athletes",
      "Integrated client scheduling & session calendar",
      "Secure zero-fee automated client billing system",
      "Advanced progress analytics & biometric data upload"
    ],
    buttonText: "Join Pro Roster",
    badge: "Popular"
  },
  {
    name: "Elite Performance Academy",
    price: "199",
    subtitle: "For multiple coaches and coaching gyms",
    features: [
      "Up to 10 sub-coach licenses included",
      "Centralized admin management & roster transfers",
      "Custom branding & dedicated mobile portal",
      "Advanced team analytics API integrations",
      "Dedicated account success manager (24/7)"
    ],
    buttonText: "Get Academy Suite",
    badge: "Elite"
  }
];
