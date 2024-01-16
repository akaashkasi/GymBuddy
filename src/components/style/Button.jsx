import PropTypes from 'prop-types';
import '../css/Footer.css';

export const Button = ({ text = 'Download ✨' }) => {
  return (
    <button className="button-demo">
      <div className="download">{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
