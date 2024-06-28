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
import heroProject from "./assets/pngs/heroProjects.png";
import sme from "./assets/pngs/sme.jpg";
import testimonial1 from "./assets/pngs/testimonial1.png";
import testimonial2 from "./assets/pngs/testimonial2.png";
import testimonial3 from "./assets/pngs/testimonial3.png";




export interface Project {
  image: string;
  title: string;
  description: string;
  moreInfo:string;
  reverse:boolean;

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
  moreInfo:string;
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
    image:partner1,
    description: "We are an impact organization whose goal is to drive transformative change for youth in Africa by empowering them with relevant Entrepreneurial and Tech skills through the provision of quality and decentralized training.",
  },
  {
    id: 2,
    title: "Help Aliance",
    image:partner2,
    description: "Founded in 1999 by Lufthansa Group employees, help alliance – since 2017 as a non-profit limited liability company under the umbrella of the Lufthansa Group – is engaged worldwide in giving young people access to education and enabling them to lead a self-determined life.",
  },
  {
    id: 3,
    title: "Tui Care Foundation",
    image:partner3,
    description: "TUI Care Foundation harnesses tourism to create opportunities for youth and support thriving global destinations. By linking travelers to worthy causes, we promote education, child and youth welfare, environmental protection, and the positive impact of tourism worldwide.",
  },
  {
    id: 4,
    title: "Waweza Movement",
    image:partner4,
    description: "Waweza Movement rescues and develops forgotten communities through sustainable projects. We provide safety, restoration, spiritual enrichment, and skills training to lift people out of poverty. Our mission is to restore dignity, share Jesus' love, and empower individuals to help others.",
  },
];

export const teamData=[
  {
    image:member1,
    name:"James Mugambi",
    title:"Co-founder,CEO",
    linkedIn:"https://www.linkedin.com/in/jamesmugambi/"
  },
  {
    image:member2,
    name:"David Kiai",
    title:"Co-founder,CIO",
    linkedIn:" https://www.linkedin.com/in/david-kiai-4a76201a5/"
  },
  {
    image:member3,
    name:"Eric Murithi",
    title:"Co-founder, CTO",
    linkedIn:" https://linkedin.com/in/eric-muriithi-48346117b/"
  },
  {
    image:member4,
    name:"Collins Wanga",
    title:"Software Engineer",
    linkedIn:" https://www.linkedin.com/in/collins-wanga-318590220/"
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


export const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/projects', label: 'Projects' },
  { to: '/partners', label: 'Partners' },
  { to: 'https://shieldintl.org/academy/', label: 'Shield Learn', external: true },
];

  export const cardContent: Project[] = [
    {
      image: project1,
      title: "Waweza Foundation",
      description: "Empowering kids through fun workshops that teach problem-solving, creativity, and effective pitching.",
      moreInfo: "These workshops aim to inspire children through engaging activities that foster critical thinking and communication skills. We focus on hands-on projects that encourage teamwork and innovation, helping children to not only learn but also to apply their knowledge in real-world scenarios. By the end of the program, participants are equipped with the skills needed to tackle challenges and present their ideas confidently.",
      reverse: false
    },
    {
      image: project5,
      title: "Tourist Development Program",
      description: "Introduction to HTML elements and basics of software engineering.",
      moreInfo: "We began the foundational software development program on the 10th of June where our goal is to create at least 5 tech-enabled tourism ventures. The innovation hub is open from 8:00 AM EAT up until 7:00 PM EAT. We do however run instructor-based coding sessions from 9:00 AM EAT up until 2:00 PM EAT where learners are currently engaged in learning the fundamentals of web application development by building a tours and travels website complete with e-commerce and booking functionality.",
      reverse: true
    },
    {
      image: project2,
      title: "Young Innovators",
      description: "Interactive workshops that empower kids with problem-solving skills, creativity, and pitching.",
      moreInfo: "Through interactive sessions, children develop innovative thinking and learn how to effectively present their ideas. Our curriculum includes exercises in design thinking, collaborative projects, and public speaking, ensuring that each participant gains a comprehensive skill set. By fostering an environment of curiosity and exploration, we help young innovators turn their ideas into tangible solutions and build their confidence in sharing them with others.",
      reverse: false
    },
    {
      image: project6,
      title: "Tourism Project",
      description: "Real-time GPS location view and tourism destination information. Booking tour guides for new places.",
      moreInfo: "This project enhances tourist experiences by providing up-to-date location data and facilitating bookings for local guides. Tourists can access detailed information about destinations, including historical context, cultural significance, and practical tips. The integration of real-time GPS ensures that visitors can navigate new areas with ease, while the guide booking feature connects them with knowledgeable locals who can offer personalized tours and insights. This project aims to make travel more enriching and accessible.",
      reverse: true
    }
  ];
  
  
  
export const typewriterWords: string[] = ["A Nexus of Innovation, Entrepreneurship, and Leadership.", "A Core of Imagination, Ventures, and Vision.", "A Fusion of Inventiveness, Business Ventures, and Mentorship."];

export const footerSections = [
    {
        title: "Reach Us",
        hidden:false,
        content: [
            { text: "Olympic estate, house no.1"},
            { text: "Phone: +254 700 366137" },
            {text:"info@shieldint.org" }
            
        ],
        image: shieldLogo
    },
    {
        title: "Our programs",
        hidden:true,
        content: [
            { text: "Design Thinking School" },
            { text: "SME and Startup Training" },
            { text: "SHIELD Developer Program" },
            { text: "Capacity Building Programs" },

        ]
    },
    {
        title: "Quick Links",
        hidden:false,
        content: [
            { text: "Home",to:"/" },
            { text: "Projects",to:"/projects" },
            {text:"Programs", to:"programs"},
            {text:"Partners",to:"/partners"}
        ]
    }
];



export const programs:Programs[] = [
  {
    title: "Design Thinking School",
    description:
      "Within the context of the design thinking process, we empower youth in underprivileged communities with the skills to collaborate and think of themselves as problem solvers and to pioneer solutions to the problems they face within their community.",
     moreInfo:"Youth that go through the design thinking process run by SHIELD are then able to develop innovative and effective solutions that are human centred and feasible. This process is a great way to get youth to think outside the box and to be creative in their problem solving, learning empathy, creativity and iterative testing.Design Thinking is a human-centered approach for innovation to integrate the needs of people, the possibilities of technology, and the requirements for business success",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Design Thinking School",
    reverse: false,
    url:"https://shieldintl.org/academy/"
  },
  {
    title: "SHIELD Entrepreneur",
    description:
      "This program is tailored at supporting any business especially those that are not venture backable. The SMEs will receive personalized training and mentorship focused on building their capacity to operate the business successfully, unlock financing from financial institutions and scale to new levels.",
    moreInfo:"Upon joining the SME Program and undergoing training, SMEs will be given access to our marketplace, an e-commerce platform where SMEs can post their various products to our huge network of community members and followers as potential clients. This gives them a wider market reach and access and boosts chances of making more sales.SHIELD brings the best of national MSME capacity building, coaching, and consulting services to youth in under priviledged communities while maximizing inclusion and supporting small and medium-sized businesses owned and run by women.",
      image: sme,
    alt: "SHIELD Entrepreneur",
    reverse: true,
    url:"https://shieldintl.org/academy/"
  },
  {
    title:"Software Development",
    description:"We provide a community for learning and earning opportunities. Our certifications prepare you for a career in software development, equip you with business acumen to help take your idea to the next level.",
    moreInfo:"We provide a community for learning and earning opportunities. Our certifications prepare you for a career in software development, equip you with business acumen to help take your idea to the next level.",
    image:heroProject,
    alt:"Software Engineering",
    reverse:false,
    url:"https://shieldintl.org/academy/"
  }
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