// Data.ts
import shieldLogo from "./assets/shieldLogo.png";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";
import python from "./assets/python.svg"
import dart from "./assets/dart.svg";
import webdev from "./assets/wedev.svg";
import dbdev from "./assets/dbdev.svg";

export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface Partner {
  image: string;
}

export interface Programs{
  title: string;
  description:string;
  image:string;
  alt:string;
  reverse:boolean
}
export interface Courses{
  title: string;
  image:string;
  buttonText:string;
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

export const programs:Programs[] = [
  {
    title: "Design Thinking School",
    description:
      "Within the context of the design thinking process, we empower youth in underprivileged communities with the skills to collaborate and think of themselves as problem solvers and to pioneer solutions to the problems they face within their community.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Design Thinking School",
    reverse: false,
  },
  {
    title: "SHIELD Entrepreneur",
    description:
      "This program is tailored at supporting any business especially those that are not venture backable. The SMEs will receive personalized training and mentorship focused on building their capacity to operate the business successfully, unlock financing from financial institutions and scale to new levels.",
    image: "https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "SHIELD Entrepreneur",
    reverse: true,
  },
];

export const courses:Courses[]=[
  {
   title:"Dart with fluttler",
   image:dart,
   buttonText:"Enroll now!"
  },
  {
    title:"Python programming",
    image:python,
    buttonText:"Enroll now!"
   },
   {
    title:"Web development",
    image:webdev,
    buttonText:"Enroll now!"
   },
   {
    title:"Database development",
    image:dbdev,
    buttonText:"Enroll now!"
   }
]