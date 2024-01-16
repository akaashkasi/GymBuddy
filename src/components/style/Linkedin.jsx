import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Linkedin = ({ className, color }) => {
  return (
    <a
      href="https://linkedin.com/in/yourprofile" // Replace with your actual LinkedIn profile link
      className={`${className} footer-social-link`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: color }} // Ensures the icon color is set to the color prop
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
  );
};

Linkedin.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Linkedin.defaultProps = {
  className: '',
  color: 'white', // Default icon color is white
};
