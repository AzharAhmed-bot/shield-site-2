// ShieldSolutions.tsx


const ShieldSolutions = () => {
  return (
    <div className="flex flex-col items-start mt-20 ml-16">
      <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mb-6">Shield <br /> solutions</h1>
      <div className="relative mt-10">
        {/* Vertical Line */}
        <div className="absolute h-full border-l-4 border-yellow-500" style={{ left: '0px' }}></div>
        
        {/* Points */}
        <div className="space-y-20">
          {/* Point 1 */}
          <div className="flex items-start">
          <div className="w-8 h-8 bg-yellow-500 rounded-full absolute" style={{ left: '-16px', top: '0' }}></div>
            <div className="w-8 h-8  rounded-full absolute" style={{ left: '-16px', top: '0' }}></div>
            <div className="flex items-baseline ml-8">
              <h2 className="text-4xl font-bold">01</h2>
              <div className="ml-6">
                <h3 className="text-3xl font-bold">Relevant Skills</h3>
                <p className="mt-2 text-lg text-gray-600">
                  We are an impact organization whose goal is to drive transformative change for youth in Africa by empowering them with relevant Entrepreneurial and Tech skills through the provision of quality and decentralized training.
                </p>
              </div>
            </div>
          </div>
          
          {/* Point 2 */}
          <div className="flex items-start">
          <div className="w-8 h-8 bg-yellow-500 lg:mt-48 mb-[-100px] rounded-full absolute" style={{ left: '-16px', top: '0' }}></div>
            <div className="w-8 h-8  rounded-full absolute" style={{ left: '-16px', top: '0' }}></div>
            <div className="flex items-baseline ml-8">
              <h2 className="text-4xl font-bold">02</h2>
              <div className="ml-6 float-right">
                <h3 className="text-3xl font-bold">Quality Education</h3>
                <p className="mt-2 text-lg text-gray-600">
                  We are an impact organization whose goal is to drive transformative change for youth in Africa by empowering them with relevant Entrepreneurial and Tech skills through the provision of quality and decentralized training.
                </p>
              </div>
            </div>
          </div>
          
          {/* Point 3 */}
          <div className="flex items-start">
            <div className="w-8 h-8 bg-yellow-500 lg:mt-96 rounded-full absolute" style={{ left: '-16px', top: '0' }}></div>
            <div className="flex items-baseline mt-4 ml-8">
              <h2 className="text-4xl font-bold">03</h2>
              <div className="ml-6">
                <h3 className="text-3xl font-bold">IMPACT</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Africa faces a huge digital skills gap that dilutes economic opportunities and development caused largely in part by lack of access and in-affordability. We offer free and accessible design thinking and tech education to bridge this gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShieldSolutions;
