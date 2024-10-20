import { FaLinkedin } from 'react-icons/fa';

interface TeamCardProp {
  image: string;
  name: string;
  title: string;
  description:string;
  linkedin: string;
}

const TeamCard: React.FC<TeamCardProp> = ({ image, name, title,description, linkedin }) => {
  return (
    <div className="bg-white text-black border-2 border-transparent rounded-lg p-6 m-4 shadow-md w-full max-w-xl transform transition duration-300 ease-in-out hover:bg-transparent hover:border-yellow-600 ">
      <div className="flex items-start">
        {/* Left Section: Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-full mr-6" 
        />

        {/* Right Section: Name, Title, and Description */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 mb-4">{title}</p>

          {/* Brief Description below the name and image */}
          <p className="text-gray-600 mb-4">
            {description}
          </p>

          {/* Socials Section (aligned to the bottom right) */}
          <div className="flex justify-end">
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-yellow-600 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
