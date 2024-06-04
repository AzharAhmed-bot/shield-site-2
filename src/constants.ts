// Data.ts
import shieldLogo from "./assets/pngs/shieldLogo.png";
import project1 from "./assets/pngs/project1.jpg";
import project2 from "./assets/pngs/project2.jpg";
import project3 from "./assets/pngs/project3.jpg";
import project4 from "./assets/pngs/project1.jpg";
import partner1 from "./assets/pngs/partner1.png";
import partner2 from "./assets/pngs/partner2.png";
import partner3 from "./assets/pngs/partner3.png";
import partner4 from "./assets/pngs/partner4.png";
import python from "./assets/svgs/python.svg"
import dart from "./assets/svgs/dart.svg";
import webdev from "./assets/svgs/wedev.svg";
import dbdev from "./assets/svgs/dbdev.svg";
import value1 from "./assets/svgs/value1.svg";
import value2 from "./assets/svgs/value2.svg";
import value3 from "./assets/svgs/value3.svg";
import value4 from "./assets/svgs/value4.svg";
import mission from "./assets/svgs/mission.svg";
import vision from "./assets/svgs/vission.svg";
import member1 from "./assets/pngs/member1.png";
import member2 from "./assets/pngs/member2.png";
import member3 from "./assets/pngs/member3.png";
import member4 from "./assets/pngs/member4.png";
import member5 from "./assets/pngs/member5.png";


export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface Partners {
  image: string;
}

export interface Values {
  image: string;
  text:string;
}

export interface Mission{
  image:string;
  title:string;
  text:string;
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

export const partnershipItems: Partners[] = [
  {
    image: partner1
  },
  {
    image: partner2
  },
  {
    image: partner3
  },
  {
    image:partner4
  }
];

export const values: Values[] = [
  {
    image: value1,
    text:"Cooperation"
  },
  {
    image: value2,
    text:"Integrity"
  },
  {
    image: value3,
    text:"Innovation"
  },
  {
    image:value4,
    text:"Equity"
  },
];

export const missionStatement: Mission[] = [
  {
    image: mission,
    title:"Mission",
    text:"To promote design thinking and digital transformation among youths in rural and informal settlements to help them pursue entrepreneurship and employment opportunities with the goal of breaking the poverty barrier in their communities.",

  },
  {
    image: vision,
    title:"Vision",
    text:"To promote design thinking and digital transformation among youths in rural and informal settlements to help them pursue entrepreneurship and employment opportunities with the goal of breaking the poverty barrier in their communities."
  },
];

export const partnersData = [
  {
    id: 1,
    title: "Impack Week",
    description: "We are an impact organization whose goal is to drive transformative change for youth in Africa by empowering them with relevant Entrepreneurial and Tech skills through the provision of quality and decentralized training.",
  },
  {
    id: 2,
    title: "Help Aliance",
    description: "Founded in 1999 by Lufthansa Group employees, help alliance – since 2017 as a non-profit limited liability company under the umbrella of the Lufthansa Group – is engaged worldwide in giving young people access to education and enabling them to lead a self-determined life.",
  },
  {
    id: 3,
    title: "Tui Care Foundation",
    description: "TUI Care Foundation harnesses tourism to create opportunities for youth and support thriving global destinations. By linking travelers to worthy causes, we promote education, child and youth welfare, environmental protection, and the positive impact of tourism worldwide.",
  },
  {
    id: 4,
    title: "Waweza Movement",
    description: "Waweza Movement rescues and develops forgotten communities through sustainable projects. We provide safety, restoration, spiritual enrichment, and skills training to lift people out of poverty. Our mission is to restore dignity, share Jesus' love, and empower individuals to help others.",
  },
];

export const teamData=[
  {
    image:member1,
    name:"James Mugabe",
    title:"Co-founder, Managing Director",
  },
  {
    image:member2,
    name:"David Kiai",
    title:"Co-founder,CEO",
  },
  {
    image:member3,
    name:"Eric Murithi",
    title:"Co-founder, CTO",
  },
  {
    image:member4,
    name:"Collins Wanga",
    title:"Software Engineer",
  }
]


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
        hidden:false,
        content: [
            { text: "1234 Main Street, Anytown, CA 12345" },
            { text: "Phone: 123-456-7890" }
        ],
        image: shieldLogo
    },
    {
        title: "Company",
        hidden:true,
        content: [
            { text: "About" },
            { text: "Contact" },
            { text: "Blog" }
        ]
    },
    {
        title: "Legal",
        hidden:true,
        content: [
            { text: "Privacy Policy" },
            { text: "Terms and Services" },
            { text: "Terms of Use" },
            { text: "Refund Policy" }
        ]
    },
    {
        title: "Quick Links",
        hidden:false,
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