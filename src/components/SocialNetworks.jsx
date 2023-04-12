import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { link: "https://www.linkedin.com/in/owagneroliveira/" ,name: "linkedin", icon: <FaLinkedinIn /> },
    { link: "https://github.com/o-wagner", name: "github", icon: <FaGithub /> },
    { link: "https://www.instagram.com/smoke.ogg/", name: "instagram", icon: <FaInstagram /> },
]; 

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks