/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE — textos, imágenes y video de la landing
 * ─────────────────────────────────────────────────────────────
 */
import servicePlans from "@/assets/Gemini_Generated_Image_rzpfihrzpfihrzpf.png";
import serviceAnalysis from "@/assets/service-analysis.jpg";
import serviceRace from "@/assets/service-race.jpg";
import teamImage from "@/assets/team.jpg";
import founderImage from "@/assets/founder.jpg";

export const BRAND = {
  name: "WhyUs",
  links: [
    { label: "HOME", href: "#home" },
    { label: "INSCRIPCIÓN", href: "#about" },
  ],
};

export const HERO = {
  // 👇 Cambia esta URL por tu video
  videoUrl: "/src/assets/Athletes_running_on_track_202608130008.mp4",
  // posterUrl: servicePlans,
  ratingText: "200+ MIEMBROS ACTIVOS",
  title: "ASTREA SE MUEVE 2.0",
  subtitle: "Corremos por salud, por pasión y por diversión. Únete a nuestra comunidad y mejora tu rendimiento.",
  cta: "APARTA TU LUGAR", href: "#about",
  
};

// export const STATS = {
//   title: "WE TURN EVERYDAY RUNNERS INTO FIERCE COMPETITORS",
//   items: [
//     { value: "89%", label: "Achieved a New PR" },
//     { value: "650+", label: "Athletes Transformed" },
//     { value: "150+", label: "Podium Finishes" },
//   ],
// };

export const MARQUEE_ITEMS = [
 "PLANES DE ENTRENAMIENTO",

"ANÁLISIS TÉCNICO",

"ESTRATEGIAS DE CARRERA",
];

// export const SERVICES = {
//   eyebrow: "Our Services",
//   title: "EVERYTHING YOU NEED TO CRUSH YOUR NEXT RACE",
//   cta: "GET STARTED",
//   cards: [
//     {
//       icon: "Footprints",
//       title: "PERSONALIZED TRAINING PLANS",
//       image: servicePlans,
//       bullets: [
//         "Race-based weekly workouts",
//         "Race-specific progression",
//         "Mobile app delivery",
//       ],
//     },
//     {
//       icon: "ClipboardList",
//       title: "ELITE TECHNIQUE ANALYSIS",
//       image: serviceAnalysis,
//       bullets: [
//         "Smart / Garmin video review",
//         "Form breakdown + fixes",
//         "Weekly live Q&A calls",
//       ],
//     },
//     {
//       icon: "Medal",
//       title: "COMPLETE RACE STRATEGIES",
//       image: serviceRace,
//       bullets: [
//         "Race week nutrition plan",
//         "Pace splits calculator",
//         "Mental preparation",
//       ],
//     },
//   ],
// };

export const WHY_US = {
  eyebrow: "UNA FORMA MÁS INTELIGENTE DE MEJORAR",
  title: "FORMULARIO DE INSCRIPCIÓN",
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

// export const FOUNDER = {
//   eyebrow: "Meet the Founder",
//   image: founderImage,
//   name: "ADRIAN PRATAMA",
//   role: "Founder",
//   title: "BUILT ON EXPERIENCE. DRIVEN BY PURPOSE.",
//   paragraph:
//     "With 7 years of coaching experience, Coach Adrian Pratama founded this service to make high-quality coaching more personal, accessible, and effective. His approach is built on a simple belief: real progress comes from the right mindset, the right method, and the right support.",
//   badges: [
//     "RRCA Certified",
//     "UESCA Certified",
//     "NASM Certified",
//     "USATF Level 3",
//   ],
// };
