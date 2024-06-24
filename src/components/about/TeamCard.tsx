import { FaLinkedin } from 'react-icons/fa';

interface TeamCardProp {
  image: string;
  name: string;
  title: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamCardProp> = ({ image, name, title, linkedin }) => {
  return (
    <div className="bg-gray-100 text-[#003445] rounded-lg p-6 m-4 shadow-lg w-64 h-auto transform transition-all hover:scale-105 hover:bg-gray-200">
      <div className="flex flex-col items-start">
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-500 mb-4">{title}</p>
        <a href={linkedin} className="text-[#003445]  cursor-pointer transition-colors">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
