interface CompanyValueProps {
    image: string;
    text: string;
}

export default function CompanyValues({ image, text }: CompanyValueProps) {
    return (
        <div className="flex items-center justify-center mt-6 m-20">
            <div className="p-4 flex flex-col items-center rounded-lg">
                <img className="h-auto w-auto" src={image} alt="Values" />
                <p className="text-2xl mt-6 text-center lg:text-white mb-4">{text}</p>
            </div>
        </div>
    );
}
