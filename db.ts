// Dynamic Coach Registration Database & Constants

export interface CoachApplication {
  id: string; // Dynamic ID eg. COACH-92104-FTB
  fullName: string;
  email: string;
  mobile: string;
  password?: string;
  primarySport: string;
  category: string;
  experience: number;
  monthlyFee: number;
  certifications: string;
  bio: string;
  photoUrl: string;
  location: string;
  languages: string;
  status: "PENDING" | "APPROVED" | "REJECTED" | "CHANGES_REQUESTED";
  adminNotes?: string;
  submittedAt: string;
  
  // Custom Dynamic Sport-Specific Info
  specializationFieldLabel?: string;
  specializationFieldValue?: string;
  fitnessFocusMetricLabel?: string;
  fitnessFocusMetricValue?: string;
}

export interface Athlete {
  id: string;
  name: string;
  sport: string;
  targetGoal: string;
  vo2max: number[];
  recoveryScore: number;
  trainingLoad: number;
  joinedAt: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  sport: string;
  durationWeeks: number;
  phase: string;
  exercises: { name: string; sets: number; reps: string; target: string }[];
}

export interface TeamMessage {
  id: string;
  sender: "coach" | "athlete" | "system";
  senderName: string;
  text: string;
  timestamp: string;
}

export interface VideoUpload {
  id: string;
  title: string;
  sport: string;
  rawUrl: string;
  analysisOverlay: boolean;
  notes: string;
  uploadedAt: string;
}

// Sport Specific Metadata Presets
export interface SportMetadata {
  name: string;
  certifications: string[];
  categories: string[];
  specializationFieldLabel: string;
  specializationPlaceHolder: string;
  fitnessFocusMetricLabel: string;
  fitnessFocusMetricDefault: string;
}

export const SPORT_METADATA_PRESETS: Record<string, SportMetadata> = {
  Football: {
    name: "Football",
    certifications: ["UEFA Pro License", "AFC Professional Coaching Diploma", "USSF National A License", "NSCAA Master Coach Certificate"],
    categories: ["Tactical Formations", "Goal-keeping Specialist", "Youth Development Academy", "Striker Attack Optimization", "Defensive Shield Periodization"],
    specializationFieldLabel: "Preferred Formation Playbook",
    specializationPlaceHolder: "e.g. 4-3-3 Attacking Verticals, 4-4-2 Low Block Press",
    fitnessFocusMetricLabel: "High-Intensity Sprint Threshold (m/s)",
    fitnessFocusMetricDefault: "8.5"
  },
  Cricket: {
    name: "Cricket",
    certifications: ["BCCI Level 3 Certified Coach", "ICC Advanced Tutor Accreditation", "Cricket Australia Level 2", "ECB Elite Specialist Specialist"],
    categories: ["Spin Bowling Specialist", "Power Hitting Mechanics", "Wicket-keeping Coach", "Seam Swing & Pace Development", "High Performance Captaincy"],
    specializationFieldLabel: "Format Spec Strategy Directives",
    specializationPlaceHolder: "e.g. T20 Strike Rates, Test Match Dynamic Red Ball Pacing",
    fitnessFocusMetricLabel: "Throwing Arm Velocity (km/h)",
    fitnessFocusMetricDefault: "125"
  },
  Athletics: {
    name: "Athletics",
    certifications: ["USATF Level 3 Track & Sprint Certification", "IAAF Level IV Senior Athletics Specialist", "European Athletics Master Trainer", "Specialist Speed Coach Alliance"],
    categories: ["Sprint Mechanics & Acceleration", "Middle-Distance Lung VO2 Conditioning", "Long Jump & Triple Thrust Vectoring", "Javelin & Discus Rotational Power"],
    specializationFieldLabel: "Primary Athlete Track Focus",
    specializationPlaceHolder: "e.g. 100m/200m Block Acceleration, Decathlon Multi-Discipline Speed",
    fitnessFocusMetricLabel: "VO2 Max Velocity Peak (mL/kg/min)",
    fitnessFocusMetricDefault: "72.4"
  },
  Basketball: {
    name: "Basketball",
    certifications: ["FIBA Licensed Elite Tutor", "USA Basketball Gold Coach License", "NABC Master Coach Accreditation", "EuroLeague Advanced Strategy Course"],
    categories: ["Point Guard Development & Vision", "Perimeter Shooting Clinic Specialist", "Post Defence & Dynamic Rebounding", "Transition Pick-and-Roll Offence"],
    specializationFieldLabel: "Preferred Half-Court Set Plays",
    specializationPlaceHolder: "e.g. Horns Set, Span-Breaker Spacing, Motion Offence 5-out",
    fitnessFocusMetricLabel: "Max Vertical Leap Peak (inches)",
    fitnessFocusMetricDefault: "38.5"
  },
  Volleyball: {
    name: "Volleyball",
    certifications: ["FIVB Level II Academy Coach", "USA Volleyball Coach Accreditation", "AVCA Master Specialist Instructor", "NCAA Certified D1 Coaching Cert"],
    categories: ["Setter Optimization & Touch", "Outside Hitter Power Angles", "Back-row Libero Defensive Anticipation", "Front-Line Blocking Tactics"],
    specializationFieldLabel: "Serve Strategy Directional Style",
    specializationPlaceHolder: "e.g. Jump Float Spike, Power Topspin Down-the-Line",
    fitnessFocusMetricLabel: "Spike Reach Absolute Height (cm)",
    fitnessFocusMetricDefault: "345"
  },
  Hockey: {
    name: "Hockey",
    certifications: ["FIH Level 3 Coaching Academy Cert", "USA Field Hockey Elite Coach License", "Hockey Canada High Performance Coach", "EHF Advanced Coaching Diploma"],
    categories: ["Penalty Corner Set Play Tactics", "3D Elimination & Aerial Skills", "Goalkeeper Reflex & Angle Coverage", "Intercept Defense Periodization"],
    specializationFieldLabel: "Preferred Pressing & Structure",
    specializationPlaceHolder: "e.g. Full Court Press, 3-4-3 Transition Wing Play",
    fitnessFocusMetricLabel: "Stick Acceleration speed (km/h)",
    fitnessFocusMetricDefault: "110"
  },
  Swimming: {
    name: "Swimming",
    certifications: ["ASCA Level 5 Olympic Coach Cert", "FINA Advanced Aquatics Coach Accreditation", "Swim England Elite Senior Coach", "USA Swimming Platinum Member Certificate"],
    categories: ["Sprint Freestyle Specialization", "Stroke Mechanics (Breast/Butterfly)", "Turns & Underwater Hydrodynamics", "Long-Distance Aerobic Threshold Pace"],
    specializationFieldLabel: "Underwater Dolphin Kick Strategy",
    specializationPlaceHolder: "e.g. High-frequency 15-meter glide-out push, hip fluid mechanics",
    fitnessFocusMetricLabel: "Stroke Rate Per Minute Target",
    fitnessFocusMetricDefault: "48"
  },
  Badminton: {
    name: "Badminton",
    certifications: ["BWF Level 3 International Coach Professional", "USAB Certified High-Performance Coach", "Badminton Asia Elite Academy Diploma", "Yonex Elite Coach Affiliate"],
    categories: ["Court Agility & Footwork Pace", "Smash Technique & Rotational Power", "Net Control & Trick Shot Optimization", "Double Defense Rotation Mechanics"],
    specializationFieldLabel: "Racket Tension & Frame Match Spec",
    specializationPlaceHolder: "e.g. 28-30 lbs high tension smash, Head-heavy frame configuration",
    fitnessFocusMetricLabel: "Lunge Recovery Speed (seconds)",
    fitnessFocusMetricDefault: "0.85"
  },
  Kabaddi: {
    name: "Kabaddi",
    certifications: ["AKFI Elite Level Ref & Advanced Coach", "Pro Kabaddi League Master Trainer", "Vidyapeeth Sports Academy Kabaddi Diploma", "National Sports Institute Coach Award"],
    categories: ["Raiding Specialization & Escape Moves", "Ankle Hold & Thigh Block Defence", "Chain Tackling & Corner Cover Controls", "Bonus Line Toe Touch Strategy"],
    specializationFieldLabel: "Raid Escape Moves Preferred Signature",
    specializationPlaceHolder: "e.g. Dubki Under-Dive, Frog Jump, Hand Touch Escape",
    fitnessFocusMetricLabel: "Leg Power Thrust / Quad Strength (kg)",
    fitnessFocusMetricDefault: "185"
  },
  Other: {
    name: "Other",
    certifications: ["Certified High Performance Sports Specialist", "National Athletic Authority Accredited Coach"],
    categories: ["General Performance Optimization", "Agility & Core Power Periodization", "Metabolic Conditioning & Nutrition"],
    specializationFieldLabel: "Specialized Tactical Metric",
    specializationPlaceHolder: "e.g. Custom tactical playbook structure or style",
    fitnessFocusMetricLabel: "Target Performance Metric Target Score",
    fitnessFocusMetricDefault: "95"
  }
};

// Initial Databases Seeds
const DEFAULT_APPLICATIONS: CoachApplication[] = [
  {
    id: "COACH-FIBA-9102",
    fullName: "Coach David Kim",
    email: "david.kim@courtvision.com",
    mobile: "+1 (555) 309-8811",
    primarySport: "Basketball",
    category: "Technical/Skills",
    experience: 7,
    monthlyFee: 220,
    certifications: "FIBA licensed coach, Nike Academy Instructor",
    bio: "Specializing in high-intensity guard work, footwork detail, and decision-making development. Former Division I player with a master's in Sports Coaching.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    location: "Chicago, IL",
    languages: "English, Korean",
    status: "APPROVED",
    submittedAt: "2026-06-01T10:00:00Z",
    specializationFieldLabel: "Preferred Half-Court Set Plays",
    specializationFieldValue: "Horns Pick-and-Pop Set",
    fitnessFocusMetricLabel: "Max Vertical Leap Peak (inches)",
    fitnessFocusMetricValue: "39"
  },
  {
    id: "COACH-UEFA-7389",
    fullName: "Marcus Vance",
    email: "m.vance@beastmode.com",
    mobile: "+1 (555) 438-1920",
    primarySport: "Football",
    category: "Strength & Conditioning",
    experience: 12,
    monthlyFee: 300,
    certifications: "CSCS, USAW Level 2, FMS Certified",
    bio: "Ex-NFL athletic performance consultant specializing in functional hypertrophy, speed mechanics, and injury risk reduction.",
    photoUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
    location: "Austin, TX",
    languages: "English",
    status: "APPROVED",
    submittedAt: "2026-06-02T14:30:00Z",
    specializationFieldLabel: "Preferred Formation Playbook",
    specializationFieldValue: "4-3-3 Attacking Gegenpress",
    fitnessFocusMetricLabel: "High-Intensity Sprint Threshold (m/s)",
    fitnessFocusMetricValue: "8.8"
  },
  {
    id: "COACH-PEND-2384",
    fullName: "Sarah Jenkins",
    email: "sarah.jenkins@performance.com",
    mobile: "+1 (555) 732-9012",
    primarySport: "Track & Field",
    category: "Strength & Conditioning",
    experience: 8,
    monthlyFee: 250,
    certifications: "CSCS, NASM-PES, Precision Nutrition L1",
    bio: "Passionate about building explosive power, functional speed, and metabolic conditioning in track events.",
    photoUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400",
    location: "Eugene, OR",
    languages: "English, Spanish",
    status: "APPROVED",
    submittedAt: "2026-06-05T08:15:00Z",
    specializationFieldLabel: "Primary Athlete Track Focus",
    specializationFieldValue: "100m Block Acceleration Profile",
    fitnessFocusMetricLabel: "VO2 Max Velocity Peak (mL/kg/min)",
    fitnessFocusMetricValue: "71.5"
  },
  {
    id: "COACH-PEND-8801",
    fullName: "Arjun Singh",
    email: "arjun.singh@kabaddiindia.com",
    mobile: "+91 98765 43210",
    primarySport: "Kabaddi",
    category: "Technical/Skills",
    experience: 9,
    monthlyFee: 180,
    certifications: "AKFI Elite Level Ref & Advanced Coach",
    bio: "Trained 4 youth national league champions. Specialist in raid escapes and ankle lock coordination timings.",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    location: "Haryana, India",
    languages: "Hindi, English, Punjabi",
    status: "PENDING",
    submittedAt: "2026-06-09T18:00:00Z",
    specializationFieldLabel: "Raid Escape Moves Preferred Signature",
    specializationFieldValue: "Dubki Under-Dive & Frog Jump Over Chain",
    fitnessFocusMetricLabel: "Leg Power Thrust / Quad Strength (kg)",
    fitnessFocusMetricValue: "192"
  },
  {
    id: "COACH-REJ-4432",
    fullName: "Coach David Miller",
    email: "david@cricketfever.com",
    mobile: "+44 7911 123456",
    primarySport: "Cricket",
    category: "Technical/Skills",
    experience: 4,
    monthlyFee: 150,
    certifications: "Level 1 Club Coach Spec",
    bio: "Enthusiastic cricket instructor looking to offer baseline training. No specialized professional accreditation.",
    photoUrl: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=400",
    location: "London, UK",
    languages: "English",
    status: "CHANGES_REQUESTED",
    adminNotes: "Please upgrade your cert to BCCI/ECB Level 2 parameters or provide scanned verified documents for higher elite rates.",
    submittedAt: "2026-06-08T11:00:00Z",
    specializationFieldLabel: "Format Spec Strategy Directives",
    specializationFieldValue: "County Championship Red Ball Lengths",
    fitnessFocusMetricLabel: "Throwing Arm Velocity (km/h)",
    fitnessFocusMetricValue: "110"
  }
];

const DEFAULT_ATHLETES: Athlete[] = [
  {
    id: "ATHLET-101",
    name: "Liam Sterling",
    sport: "Basketball",
    targetGoal: "Increase vertical leap & shooting accuracy in crunch time",
    vo2max: [52, 54, 55, 57, 59, 60],
    recoveryScore: 88,
    trainingLoad: 145,
    joinedAt: "2026-06-02"
  },
  {
    id: "ATHLET-102",
    name: "Marcus Rashford Jr.",
    sport: "Football",
    targetGoal: "Develop explosive change of direction in 20-meter acceleration",
    vo2max: [62, 63, 63, 65, 66, 68],
    recoveryScore: 92,
    trainingLoad: 180,
    joinedAt: "2026-06-03"
  },
  {
    id: "ATHLET-103",
    name: "Clara Oswald",
    sport: "Track & Field",
    targetGoal: "Trim 0.5 seconds off start clearance block angles",
    vo2max: [68, 69, 71, 71, 72, 73],
    recoveryScore: 78,
    trainingLoad: 195,
    joinedAt: "2026-06-04"
  }
];

const DEFAULT_PROGRAMS: TrainingProgram[] = [
  {
    id: "PROG-201",
    title: "Explosive Vertical Jump Phase I",
    sport: "Basketball",
    durationWeeks: 4,
    phase: "Anatomical Adaptation & Neurological Power",
    exercises: [
      { name: "Depth Jumps onto Box (24\")", sets: 4, reps: "6 reps", target: "Reactive ground contact < 0.2s" },
      { name: "Heavy Barbell Quarter Squats", sets: 5, reps: "4 reps @85% 1RM", target: "High rate of force development" },
      { name: "Single-Arm Dumbbell Snatch", sets: 3, reps: "5 per arm", target: "Triple extension coordination" }
    ]
  },
  {
    id: "PROG-202",
    title: "Gegenpressing Sprint Mechanics",
    sport: "Football",
    durationWeeks: 6,
    phase: "Anaerobic Energy Systems & Sprint Power",
    exercises: [
      { name: "Resisted Sled Drills (15% body weight)", sets: 5, reps: "20 meters sprint", target: "Horizontal force vectoring" },
      { name: "Incline Interval Treadmill Reps", sets: 6, reps: "30s Sprint / 90s Rest", target: "Lactate clearance rate" },
      { name: "Nordic Hamstring Curl Eccentrics", sets: 3, reps: "6 reps slow down", target: "Injury prevention peak loads" }
    ]
  }
];

const DEFAULT_MESSAGES: TeamMessage[] = [
  {
    id: "MSG-301",
    sender: "athlete",
    senderName: "Liam Sterling",
    text: "Hey coach, I was feeling a slight tightness in my left Achilles tendon during yesterday's box jumps. Should I scale down today's sprints?",
    timestamp: "8:30 AM"
  },
  {
    id: "MSG-302",
    sender: "coach",
    senderName: "Coach",
    text: "Great catch Liam. Avoid the explosive deceleration cuts today. Swap the 20m high-threshold sprints for light tempo mobility works and foam rolls.",
    timestamp: "8:45 AM"
  },
  {
    id: "MSG-303",
    sender: "athlete",
    senderName: "Liam Sterling",
    text: "Understood, will complete the 45-minute glycogen recovery protocol with high hydration ratios instead.",
    timestamp: "9:02 AM"
  }
];

const DEFAULT_VIDEOS: VideoUpload[] = [
  {
    id: "VID-401",
    title: "Liam - Deep Box Jump Angle Correction",
    sport: "Basketball",
    rawUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    analysisOverlay: true,
    notes: "Knee valgus angle detected on impact (165° vs. target 180° flat). Instructed player to drive knees outward on absolute compression phase to preserve quad torque.",
    uploadedAt: "2026-06-08"
  }
];

// Database CRUD management class
export class LocalSportsDB {

  static getApplications(): CoachApplication[] {
    const data = localStorage.getItem("aac_coach_applications");
    if (!data) {
      localStorage.setItem("aac_coach_applications", JSON.stringify(DEFAULT_APPLICATIONS));
      return DEFAULT_APPLICATIONS;
    }
    return JSON.parse(data);
  }

  static saveApplication(app: CoachApplication) {
    const apps = this.getApplications();
    const index = apps.findIndex(item => item.id === app.id);
    if (index >= 0) {
      apps[index] = app;
    } else {
      apps.unshift(app);
    }
    localStorage.setItem("aac_coach_applications", JSON.stringify(apps));
    this.syncCoachRoster();
  }

  static getAthletes(): Athlete[] {
    const data = localStorage.getItem("aac_athletes");
    if (!data) {
      localStorage.setItem("aac_athletes", JSON.stringify(DEFAULT_ATHLETES));
      return DEFAULT_ATHLETES;
    }
    return JSON.parse(data);
  }

  static addAthlete(athlete: Athlete) {
    const list = this.getAthletes();
    list.push(athlete);
    localStorage.setItem("aac_athletes", JSON.stringify(list));
  }

  static getPrograms(): TrainingProgram[] {
    const data = localStorage.getItem("aac_training_programs");
    if (!data) {
      localStorage.setItem("aac_training_programs", JSON.stringify(DEFAULT_PROGRAMS));
      return DEFAULT_PROGRAMS;
    }
    return JSON.parse(data);
  }

  static addProgram(program: TrainingProgram) {
    const list = this.getPrograms();
    list.unshift(program);
    localStorage.setItem("aac_training_programs", JSON.stringify(list));
  }

  static getMessages(): TeamMessage[] {
    const data = localStorage.getItem("aac_messages");
    if (!data) {
      localStorage.setItem("aac_messages", JSON.stringify(DEFAULT_MESSAGES));
      return DEFAULT_MESSAGES;
    }
    return JSON.parse(data);
  }

  static addMessage(msg: TeamMessage) {
    const list = this.getMessages();
    list.push(msg);
    localStorage.setItem("aac_messages", JSON.stringify(list));
  }

  static getVideos(): VideoUpload[] {
    const data = localStorage.getItem("aac_videos");
    if (!data) {
      localStorage.setItem("aac_videos", JSON.stringify(DEFAULT_VIDEOS));
      return DEFAULT_VIDEOS;
    }
    return JSON.parse(data);
  }

  static addVideo(vid: VideoUpload) {
    const list = this.getVideos();
    list.unshift(vid);
    localStorage.setItem("aac_videos", JSON.stringify(list));
  }

  // Auto sync active approved coaches into the main directory registry!
  static syncCoachRoster() {
    const apps = this.getApplications();
    const approved = apps.filter(item => item.status === "APPROVED");
    
    // Map with default coach directory attributes
    const mappedCoaches = approved.map(app => ({
      id: app.id,
      fullName: app.fullName,
      email: app.email,
      mobile: app.mobile,
      primarySport: app.primarySport,
      category: app.category,
      experience: Number(app.experience) || 1,
      monthlyFee: Number(app.monthlyFee) || 200,
      certifications: app.certifications || "Accredited Coach Expert",
      bio: app.bio || "Dedicated professional specializing in elite coordination drills.",
      location: app.location || "San Jose, CA",
      languages: app.languages || "English",
      photoUrl: app.photoUrl,
      rating: 5.0,
      reviewsCount: 1,
      isVerified: true
    }));

    localStorage.setItem("athlete_coach_connect_dataset", JSON.stringify(mappedCoaches));
  }

  static getActiveCoaches() {
    this.syncCoachRoster();
    const data = localStorage.getItem("athlete_coach_connect_dataset");
    return data ? JSON.parse(data) : [];
  }

  // Reset database values
  static resetDB() {
    localStorage.setItem("aac_coach_applications", JSON.stringify(DEFAULT_APPLICATIONS));
    localStorage.setItem("aac_athletes", JSON.stringify(DEFAULT_ATHLETES));
    localStorage.setItem("aac_training_programs", JSON.stringify(DEFAULT_PROGRAMS));
    localStorage.setItem("aac_messages", JSON.stringify(DEFAULT_MESSAGES));
    localStorage.setItem("aac_videos", JSON.stringify(DEFAULT_VIDEOS));
    this.syncCoachRoster();
  }
}
