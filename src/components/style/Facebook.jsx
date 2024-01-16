// Facebook.jsx
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Facebook = ({ className, color }) => {
  return (
    <a
      href="https://facebook.com/yourpage"
      className={`${className} footer-social-link`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
  );
};

Facebook.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Facebook.defaultProps = {
  className: '',
  color: 'black', // Default icon color
};

export default Facebook;
