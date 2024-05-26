
import { footerSections } from "../../constants";

const Footer = () => {

    return (
        <footer className="bg-black text-white mt-12 rounded-t-3xl py-10 cursor-pointer">
            <div className="container mx-auto flex flex-wrap justify-between">
                {footerSections.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h2 className="text-xl font-semibold mb-4 hover:text-yellow-500">{section.title}</h2>
                        <ul>
                            {section.content.map((item, idx) => (
                                <li key={idx} className="py-3 hover:text-yellow-500">{item.text}</li>
                            ))}
                        </ul>
                        {section.image && <img src={section.image} alt="SHield Logo" className="h-10 w-auto mt-10" />}
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
