import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface TeamCardProp {
  image: string;
  name: string;
  title: string;
}

const TeamCard: React.FC<TeamCardProp> = ({ image, name, title }) => {
  return (
    <div className="bg-black text-white rounded-lg p-4 m-2 shadow-md w-64 h-40">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-400">{title}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 bg-white rounded-2xl p-2">
        <a href="#" className="mx-2 text-black transition-transform transform hover:scale-125">
          <FaFacebook />
        </a>
        <a href="#" className="mx-2 text-black transition-transform transform hover:scale-125">
          <FaTwitter />
        </a>
        <a href="#" className="mx-2 text-black transition-transform transform hover:scale-125">
          <FaLinkedin />
        </a>
        <a href="#" className="mx-2 text-black transition-transform transform hover:scale-125">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
