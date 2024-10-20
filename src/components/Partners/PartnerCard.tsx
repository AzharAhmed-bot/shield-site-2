import { partnersData } from '../../constants';

export default function PartnerCards() {
  return (
    <div className="px-4 py-2">
      <h1 className="text-5xl font-extrabold text-[#003445] mb-8">Our Partners</h1>

      {/* Use grid layout to display 2 partners per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {partnersData.map((program, index) => (
          <div
            key={index}
            className="bg-white text-black border-2 border-transparent rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:border-yellow-600"
          >
            {/* Responsive Flex Container */}
            <div className="flex flex-col sm:flex-row items-start">
              {/* Left Section: Image */}
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 object-contain bg-center border-2 hover:border-yellow-600" 
              />

              {/* Right Section: Title and Description */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-1">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
