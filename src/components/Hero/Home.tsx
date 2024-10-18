import Footer from '../Common/Footer';
import ShieldSolutions from './SheildSolutions';
import CompanyDescription from './CompanyDescription';
import Opportunity from "./Opportunity";
import Card from './Card';
import PartnershipItem from './Partnership';
import FaqSection from './FaqSection';
import Landing from "./Landing";
import { partnershipItems, cardContent } from '../../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Landing /> {/* Render the Landing component here */}

      {/* Company description */}
      <CompanyDescription />

      {/* Projects Section */}
      <div className="flex flex-wrap mt-12 gap-x-6 gap-y-10 justify-center items-center mx-auto max-w-7xl px-8 lg:px-20">
        {cardContent.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Shield solutions */}
      <ShieldSolutions />

      <Opportunity />

      {/* FAQ Section */}
      <FaqSection />

      {/* Partnership Section */}
      <div className="flex flex-col items-center mt-12 min-h-full font-sans justify-center pt-8 lg:pt-16 max-w-7xl mx-auto px-8 lg:px-20 space-y-8">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 p-4 lg:p-0">
          {partnershipItems.map((partner, index) => (
            <PartnershipItem key={index} url={partner.url} image={partner.image} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
