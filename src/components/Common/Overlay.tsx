

interface OverlayProps {
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const Overlay = ({ onClose, image, title, description }:OverlayProps) => {
  return (
   
      <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full max-w-screen-xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})`, opacity: 0.9 }}></div>
            <div className="absolute bottom-0 left-0 w-full h-1/5 flex justify-center items-center">
              <div className="relative w-full h-40 bg-gray-300 opacity-80 rounded-lg shadow-lg">
                <button className="absolute top-2 right-2 text-black" onClick={onClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Overlay;
