import { FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="contact">
      <MdEmail />
      <span>mohsenahmadwork@gmail.com</span>
      </div>
      <div className="contact">
      <FaWhatsapp />
      <span>0948356750</span>
      </div>
      <div className="contact">
      <FaPhoneAlt />
      <a>0982810722</a>
      </div>
      <div className="contact">
      <FaLinkedin />
      <a href="https://www.linkedin.com/in/mohsen-ahmad" target="_blank">linked</a>
      </div>
    </div>
  )
}

export default  Footer;
