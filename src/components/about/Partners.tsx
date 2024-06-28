import { partnersData } from "../../constants";
import { useNavigate } from "react-router-dom";

const Partners = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col items-start mt-20 ml-16">
      <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mb-6">
        Our <br /> Partners
      </h1>
      <div className="relative mt-10">
        {/* Vertical Line */}
        <div className="absolute h-full border-l-4 border-yellow-500" style={{ left: '0px' }}></div>
        
        {/* Points */}
        <div className="space-y-20">
          {partnersData.map((partner) => (
            <div key={partner.id} className="flex items-start">
              <div
                className="w-8 h-8 bg-yellow-500 rounded-full absolute"
                style={{ left: '-16px', top: '0' }}
              ></div>
              <div className="flex items-baseline ml-8">
                <h2 className="text-4xl font-bold">{String(partner.id).padStart(2, '0')}</h2>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold">{partner.title}</h3>
                  <p className="mt-2 lg:text-lg text-sm text-gray-600">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        {/* Styled Button */}
        <button onClick={()=>navigate('/partners')} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold lg:py-4 py-2 lg:px-8  px-2 rounded-full shadow-lg">
          Explore More About Our Partners
        </button>
      </div>
    </div>
  );
};

export default Partners;
