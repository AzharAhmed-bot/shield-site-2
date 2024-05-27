// Data.ts
import shieldLogo from "./assets/shieldLogo.png";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";

export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface Partner {
  image: string;
}

export const partnershipItems: Partner[] = [
  {
    image: partner1
  },
  {
    image: partner2
  },
  {
    image: partner3
  },
];

export  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/shield-learn', label: 'Sheild Learn' },
  ];

export const cardContent: Project[] = [
  {
    image: project1,
    title: "Waweza foundation",
    description: "Fun workshop teaches problem-solving, creativity, pitching, empowering kids effectively."
  },
  {
    image: project2,
    title: "Empowering minds",
    description: "Fun workshop teaches problem-solving, creativity, pitching, empowering kids effectively."
  },
  {
    image: project3,
    title: "Young innovators",
    description: "Fun, interactive workshop empowers kids with problem-solving, creativity, pitching."
  },
  {
    image: project4,
    title: "Innovative youth",
    description: "Youthful minds engage in problem-solving, creativity, and persuasive pitching."
  }
];

export const typewriterWords: string[] = ["A Nexus of Innovation, Entrepreneurship, and Leadership.", "A Core of Imagination, Ventures, and Vision.", "A Fusion of Inventiveness, Business Ventures, and Mentorship."];

export const footerSections = [
    {
        title: "Reach Us",
        content: [
            { text: "1234 Main Street, Anytown, CA 12345" },
            { text: "Phone: 123-456-7890" }
        ],
        image: shieldLogo
    },
    {
        title: "Company",
        content: [
            { text: "About" },
            { text: "Contact" },
            { text: "Blog" }
        ]
    },
    {
        title: "Legal",
        content: [
            { text: "Privacy Policy" },
            { text: "Terms and Services" },
            { text: "Terms of Use" },
            { text: "Refund Policy" }
        ]
    },
    {
        title: "Quick Links",
        content: [
            { text: "Home" },
            { text: "Solutions" },
            { text: "Projects" }
        ]
    }
];