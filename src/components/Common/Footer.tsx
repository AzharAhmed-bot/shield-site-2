import { footerSections } from "../../constants";
import { AiFillLinkedin, AiFillInstagram  } from 'react-icons/ai';
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    // Define social media links
    const socialLinks = [
        {  icon: <AiFillLinkedin />, url: 'https://ke.linkedin.com/company/shieldintlorg' },
        {  icon: <AiFillInstagram />, url: 'https://www.instagram.com/shield_intl/' },
        {  icon: <FaSquareXTwitter />  , url:'https://www.instagram.com/shield_intl/'}
    ];

    return (
        <footer className="bg-[#003445] text-white mt-12 overflow-hidden rounded-t-3xl py-10 cursor-pointer">
            <div className="container ml-4   mx-auto flex flex-wrap justify-between">
                {footerSections.map((section, index) => (
                    <div key={index} className={`footer-section ${section.hidden && 'hidden lg:block'}`}>
                        {section.image && <img src={section.image} alt="Shield Logo" className="h-10 w-auto mr-4 mt-10" />}
                        <h2 className="text-xl font-semibold mb-4 hover:text-yellow-500 mt-4">{section.title}</h2>
                        
                        <ul>
                            {section.content.map((item, idx) => (
                                <li key={idx} className="py-3 hover:text-yellow-500">{item.text}</li>
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
                
                {/* Company description section */}
                <div className="footer-section mt-4">
                    <h2 className="text-xl font-semibold mb-4 hover:text-yellow-500 mt-4">Our Mission</h2>
                    <p className="text-sm mb-4">
                        Our goal is to create design thinkers and entrepreneurs who can collaborate to solve social problems experienced in the slums and rural areas and in the process inspire even more fellow youths to join the movement thus bringing about a ripple effect of positive change in their communities!
                    </p>
                </div>
                
                
            </div>
        </footer>
    );
}

export default Footer;
