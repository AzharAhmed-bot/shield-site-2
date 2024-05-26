// PartnershipItem.tsx
interface PartnershipItemProps {
  image: string;
}

const Partnership = ({ image }:PartnershipItemProps) => {
  return (
    <div className="flex   items-center justify-center mt-6 m-20">
      <div className="p-4  rounded-lg">
        <img className="lg:h-20 lg:w-36 md:h-12 md:w-24 sm:h-8 sm:w-12" src={image} alt="Partners" />
      </div>
    </div>
  );
};

export default Partnership;
