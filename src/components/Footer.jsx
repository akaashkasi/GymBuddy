import { Frame } from './style/Frame';
import { Facebook } from './style/Facebook';
import { Instagram } from './style/Instagram';
import { Linkedin } from './style/Linkedin';
import './css/Footer.css';

export const Footer = () => {
  return (
    <div className="contact-us">
      <Frame />
      <div className="frame-3">
        <Facebook className="icon-instance-node" color="white" />
        <Instagram className="icon-instance-node" color="white" />
        <Linkedin className="icon-instance-node" color="white" />
      </div>
    </div>
  );
};

export default Footer;
