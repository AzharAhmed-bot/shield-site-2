// PartnershipItem.tsx

interface PartnershipItemProps {
  image: string;
}

const Partnership = ({ image }: PartnershipItemProps) => {
  return (
    <div className="flex  mt-6 m-20 ml-8">
      <div className="p-4 h-20 w-32 rounded-lg">
        <img className="h-12 w-36 " src={image} alt="Partners" />
      </div>
    </div>
  );
};

export default Partnership;
