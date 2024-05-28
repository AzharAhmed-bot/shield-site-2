import { teamData } from '../../constants';
import TeamCard from './TeamCard'; // Make sure the path is correct

const Team = () => {
  return (
    <>
    <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mt-20 ml-12">
        Our <br /> Partners
      </h1>
    <div className="flex flex-wrap justify-center mt-10">
      {teamData.map((member, index) => (
        <TeamCard key={index} image={member.image} name={member.name} title={member.title} />
      ))}
    </div>
    </>
  );
};

export default Team;
