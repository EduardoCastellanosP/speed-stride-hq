/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE — textos, imágenes y video de la landing
 * ─────────────────────────────────────────────────────────────
 */
import servicePlans from "@/assets/service-plans.jpg";
import serviceAnalysis from "@/assets/service-analysis.jpg";
import serviceRace from "@/assets/service-race.jpg";
import teamImage from "@/assets/team.jpg";
import founderImage from "@/assets/founder.jpg";

export const BRAND = {
  name: "WhyUs",
  ctaNav: "USE FOR FREE",
  links: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PRICING", href: "#pricing" },
    { label: "CONTACT", href: "#contact" },
  ],
};

export const HERO = {
  // 👇 Cambia esta URL por tu video
  videoUrl: "https://cdn.coverr.co/videos/coverr-running-on-a-track-1080p.mp4",
  posterUrl: servicePlans,
  ratingText: "200+ ACTIVE MEMBERS",
  title: "UNLOCK YOUR TRUE POTENTIAL",
  subtitle: "Custom coaching that transforms good runners into elite athletes.",
  cta: "BOOK A CALL",
};

export const STATS = {
  title: "WE TURN EVERYDAY RUNNERS INTO FIERCE COMPETITORS",
  items: [
    { value: "89%", label: "Achieved a New PR" },
    { value: "650+", label: "Athletes Transformed" },
    { value: "150+", label: "Podium Finishes" },
  ],
};

export const MARQUEE_ITEMS = [
  "TRAINING PLANS",
  "TECHNIQUE ANALYSIS",
  "RACE STRATEGIES",
];

export const SERVICES = {
  eyebrow: "Our Services",
  title: "EVERYTHING YOU NEED TO CRUSH YOUR NEXT RACE",
  cta: "GET STARTED",
  cards: [
    {
      icon: "Footprints",
      title: "PERSONALIZED TRAINING PLANS",
      image: servicePlans,
      bullets: [
        "Race-based weekly workouts",
        "Race-specific progression",
        "Mobile app delivery",
      ],
    },
    {
      icon: "ClipboardList",
      title: "ELITE TECHNIQUE ANALYSIS",
      image: serviceAnalysis,
      bullets: [
        "Smart / Garmin video review",
        "Form breakdown + fixes",
        "Weekly live Q&A calls",
      ],
    },
    {
      icon: "Medal",
      title: "COMPLETE RACE STRATEGIES",
      image: serviceRace,
      bullets: [
        "Race week nutrition plan",
        "Pace splits calculator",
        "Mental preparation",
      ],
    },
  ],
};

export const WHY_US = {
  eyebrow: "Why Us",
  title: "A SMARTER WAY TO IMPROVE",
  image: teamImage,
  left: [
    {
      icon: "Zap",
      title: "New Personal Bests",
      text: "Personalized, one-on-one sessions focused on helping you overcome challenges.",
    },
    {
      icon: "HeartPulse",
      title: "Injury-Resilient Training",
      text: "Balanced programming that supports recovery, consistency, and long-term development.",
    },
  ],
  right: [
    {
      icon: "TrendingUp",
      title: "Sustainable Progress",
      text: "A practical system designed to help you keep improving without burning out.",
    },
    {
      icon: "Target",
      title: "Smarter Race Execution",
      text: "Better pacing, preparation, and strategy so you can perform with confidence.",
    },
  ],
};

export const FOUNDER = {
  eyebrow: "Meet the Founder",
  image: founderImage,
  name: "ADRIAN PRATAMA",
  role: "Founder",
  title: "BUILT ON EXPERIENCE. DRIVEN BY PURPOSE.",
  paragraph:
    "With 7 years of coaching experience, Coach Adrian Pratama founded this service to make high-quality coaching more personal, accessible, and effective. His approach is built on a simple belief: real progress comes from the right mindset, the right method, and the right support.",
  badges: [
    "RRCA Certified",
    "UESCA Certified",
    "NASM Certified",
    "USATF Level 3",
  ],
};
