import comingSoonImage from "../../assets/pngs/comingsoon.png";


const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-yellow-600 to-blue-800 text-center px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <img
          src={comingSoonImage}
          alt="Coming Soon"
          className="w-40 h-40 mx-auto mb-6"
        />
        
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-xl text-gray-600">
          We are working hard to bring you some new payment using paystack. Stay tuned!
        </p>
        <p>Use the paypal payment method<span className="font-bold "> Below</span></p>
      </div>
    </div>
  );
};

export default ComingSoon;
