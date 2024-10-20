import { teamData } from '../../constants';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <>
      <h1 className="lg:text-6xl text-5xl font-extrabold text- mt-20 ml-12">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-start mt-10">
        {teamData.map((member, index) => (
          <TeamCard 
            key={index} 
            linkedin={member.linkedIn}
            description={member.description} 
            image={member.image} 
            name={member.name} 
            title={member.title} 
          />
        ))}
      </div>
    </>
  );
};

export default Team;
