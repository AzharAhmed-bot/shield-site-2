import { footerSections } from "../../constants";
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

const Footer = () => {
    // Define social media links
    const socialLinks = [
        { icon: <AiFillLinkedin />, url: 'https://ke.linkedin.com/company/shieldintlorg' },
        { icon: <AiFillInstagram />, url: 'https://www.instagram.com/shield_intl/' },
        { icon: <FaSquareXTwitter />, url: 'https://x.com/shieldintlorg' }
    ];

    return (
        <footer className="bg-[#003445] text-white mt-12 overflow-hidden rounded-t-3xl py-10 cursor-pointer">
            <div className="container ml-4 mx-auto flex lg:flex-row md:flex-row flex-col flex-wrap justify-between lg:px-0 px-4">
                {footerSections.map((section, index) => (
                    <div key={index} className={`footer-section ${section.hidden && 'hidden lg:block'}`}>
                        {section.image && <img src={section.image} alt="Shield Logo" className="h-10 w-auto mr-4 mt-10" />}
                        <h2 className="lg:text-xl text-md font-semibold mb-4 hover:text-yellow-500 mt-4">{section.title}</h2>
                        <ul>
                            {section.content.map((item, idx) => (
                                <li key={idx} className="py-3 hover:text-yellow-500">
                                    {item.to ? <Link to={item.to}>{item.text}</Link> : item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Social media links section */}
                <div className="footer-section mt-4 lg:mr-20">
                    <h2 className="text-3xl font-semibold mb-4 hover:text-yellow-500 mt-4">Follow Us</h2>
                    <ul className="flex space-x-4">
                        {socialLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className="lg:text-3xl text-xl hover:text-yellow-500" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
