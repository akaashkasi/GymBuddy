import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Instagram = ({ className, color }) => {
  return (
    <a
      href="https://instagram.com/yourprofile" // Replace with your actual Instagram profile link
      className={`${className} footer-social-link`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: color }} // Ensures the icon color is set to the color prop
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  );
};

Instagram.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Instagram.defaultProps = {
  className: '',
  color: 'white', // Default icon color is white
};
