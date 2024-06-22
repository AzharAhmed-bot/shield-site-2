interface OverlayProps {
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const Overlay = ({ onClose, image, title, description }: OverlayProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-100">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row">
        <div className="hidden md:block w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})`, opacity: 0.9 }}></div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-[#003445] md:bg-opacity-80">
          <div className="relative w-3/4 h-3/4 bg-white rounded-lg shadow-lg p-6 z-50">
            <button className="absolute top-2 right-2 text-[#003445]" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[#003445] antialiased">
              {title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-bold antialiased">
              {description}
            </p>
          </div>
        </div>
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})`, opacity: 0.3 }}></div>
      </div>
    </div>
  );
};

export default Overlay;
