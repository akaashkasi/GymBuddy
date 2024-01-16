import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Instagram = ({ className, color }) => {
  return (
    <a
      href="https://instagram.com/yourprofile"
      className={`${className} footer-social-link`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: color }}
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
  color: 'white',
};
