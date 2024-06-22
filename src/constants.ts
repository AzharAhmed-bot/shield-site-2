// Data.ts
import shieldLogo from "./assets/pngs/shieldLogo.png";
import project1 from "./assets/pngs/project1.jpg";
import project2 from "./assets/pngs/project2.jpg";
import project5 from "./assets/pngs/project5.png";
import project6 from "./assets/pngs/project6.png";
import partner1 from "./assets/pngs/partner1.png";
import partner2 from "./assets/pngs/partner2.png";
import partner3 from "./assets/pngs/partner3.png";
import partner4 from "./assets/pngs/partner4.png";
import partner5 from "./assets/pngs/partner5.png";
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
import testimonial1 from "./assets/pngs/testimonial1.png";
import testimonial2 from "./assets/pngs/testimonial2.png";
import testimonial3 from "./assets/pngs/testimonial3.png";
import { title } from "process";



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
  reverse:boolean;
  url:string;
}
export interface Courses{
  title: string;
  image:string;
  buttonText:string;
  url:string;
}

export const statistics = [
  { value: "15+", label: "Entrepreneurs Supported" },
  { value: "2", label: "Projects Funded" },
  { value: "4+", label: "Partners Engaged" },
  { value: "10+", label: "Mentors Engaged" },
];
export const testimonials = [
  {
    quote: "SHIELD has been instrumental in supporting my entrepreneurial journey. Their mentorship and resources have helped me navigate challenges and grow my ideas.",
    name: "John Doe",
    image: testimonial1,
    title: "Student"
  },
  {
    quote: "I've benefited greatly from SHIELD's network and opportunities. They've provided me with the support I need to pursue my projects and make a real impact.",
    name: "Jane Smith",
    image: testimonial2,
    title: "Student"
  },
  {
    quote: "Being part of SHIELD has been a game-changer for me. The community here is vibrant, and the resources available are unmatched.",
    name: "Sam Wilson",
    image: testimonial3,
    title: "Student"
  }
];


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
    image:partner5
  },
  {
    image:partner4
  },
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
    title:"Co-founder,CIO",
  },
  {
    image:member3,
    name:"Eric Murithi",
    title:"Co-founder, CEO",
  },
  {
    image:member4,
    name:"Collins Wanga",
    title:"Software Engineer",
  }
]

export const faqContent={
  title:"FAQ on SHIELD PROGRAM",
  rows:[
    {
    title:"How can I apply for the SHIELD program?",
    content:"https://docs.google.com/forms/d/1NHc6Yphr_N7WxSGgOVlsoWxkFImtqy36ioERIQb7oWs"
    },
    {
      title:"Will have I to pay to be trained in Design Thinking?",
      content:"No, the course is absolutely free ⚡"
    },
    {
      title:"How do I access my course?",
      content:"You can access your course by signing in through SHIELD'S learning management platform here. You will log in with the email and password created at the time of registration."
    },
    {
      title:"How many hours on average per day do I need to successfully undertake the course? ",
      content:"You need at least 3 hours a day, on average 18 hrs a week"
    },
    {
      title:"What is the procedure of undertaking the courses?",
      content:"You choose your own procedure because It is self paced paced learning experience."
    },
    {
      title:"What programs would I learn within SHIELD to make me a better entrepreneur?",
      content:"Within SHIELD, you would learn design thinking, software development, as well as be placed into a software development program as well as be placed a pre-accelerator."
    },
    {
      title:"Are the programs running physically or virtually?",
      content:"Once you register onto the SHIELD platform, you get firsthand access to all the training modules in addition to invites to exclusive meetups where we take you through the trainings."
    },
    {
      title:"What programs would I learn within Shield to make me a better entrepreneur?",
      content:"Within SHIELD, you would learn design thinking, software development, as well as be placed into a software development program as well as be placed a pre-accelerator."
    }
  ]
}


export  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: 'https://shieldintl.org/academy/', label: 'Shield Learn' },
  ];

  export const cardContent: Project[] = [
    {
      image: project1,
      title: "Waweza Foundation",
      description: "Empowering kids through fun workshops that teach problem-solving, creativity, and effective pitching."
    },
    {
      image: project5,
      title: "Tourist Development Program",
      description: "Introduction to HTML elements and basics of software engineering."
    },
    {
      image: project2,
      title: "Young Innovators",
      description: "Interactive workshops that empower kids with problem-solving skills, creativity, and pitching."
    },
    {
      image: project6,
      title: "Tourism Project",
      description: "Real-time GPS location view and tourism destination information. Booking tour guides for new places."
    }
  ];
  
export const typewriterWords: string[] = ["A Nexus of Innovation, Entrepreneurship, and Leadership.", "A Core of Imagination, Ventures, and Vision.", "A Fusion of Inventiveness, Business Ventures, and Mentorship."];

export const footerSections = [
    {
        title: "Reach Us",
        hidden:false,
        content: [
            { text: "APA Arcade, 1st Floor"},
            { text: "Phone: +254 700 366137" },
            {text:"info@shieldint.org" }
            
        ],
        image: shieldLogo
    },
    {
        title: "Company",
        hidden:true,
        content: [
            { text: "Home" },
            { text: "About" },
            
        ]
    },
    {
        title: "Our services",
        hidden:true,
        content: [
            { text: "Design Thinking School" },
            { text: "SME and Startup Training" },
            { text: "SHIELD Developer Program" },
            { text: "Capacity Building Programs for" },
            { text: "startups" },

        ]
    },
    {
        title: "Quick Links",
        hidden:false,
        content: [
            { text: "Home" },
            { text: "Solutions" },
            { text: "Projects" },
            {text:"Programs"},
            {text:"Partners"}
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
    url:"https://shieldintl.org/academy/"
  },
  {
    title: "SHIELD Entrepreneur",
    description:
      "This program is tailored at supporting any business especially those that are not venture backable. The SMEs will receive personalized training and mentorship focused on building their capacity to operate the business successfully, unlock financing from financial institutions and scale to new levels.",
    image: "https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "SHIELD Entrepreneur",
    reverse: true,
    url:"https://shieldintl.org/academy/"
  },
];

export const courses:Courses[]=[
  {
   title:"Dart with fluttler",
   image:dart,
   buttonText:"Enroll now!",
   url:"https://shieldintl.org/academy/"
  },
  {
    title:"Python programming",
    image:python,
    buttonText:"Enroll now!",
    url:"https://shieldintl.org/academy/"
   },
   {
    title:"Web development",
    image:webdev,
    buttonText:"Enroll now!",
    url:"https://shieldintl.org/academy/"
   },
   {
    title:"Database development",
    image:dbdev,
    buttonText:"Enroll now!",
    url:"https://shieldintl.org/academy/"
   }
]