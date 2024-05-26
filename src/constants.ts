// Data.ts
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";

interface Project {
  image: string;
  title: string;
  description: string;
}

interface Partner {
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
  