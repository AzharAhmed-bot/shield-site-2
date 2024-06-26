interface MissionProps {
    image: string;
    title: string;
    text: string;
}

export default function CompanyMission({ image, title, text }: MissionProps) {
    return (
        <div className="flex flex-col  items-center lg:items-start lg:flex-row p-8 bg-primary bg-gray-100 rounded-lg m-4 shadow-lg max-w-md lg:max-w-lg transition duration-300 hover:scale-105 hover:bg-gray-200">
            <img className="h-12 w-12 lg:h-16 lg:w-16 m-4" src={image} alt={title} />
            <div className="flex flex-col text-center lg:text-left m-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4">{text}</p>
            </div>
        </div>
    );
}
