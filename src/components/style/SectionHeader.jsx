// ... rest of the imports
import PropTypes from 'prop-types';
import '../css/Footer.css';

export const SectionHeader = ({
  className,
  divClassName,
  text = 'Heading 7',
  divClassNameOverride,
  text1 = 'Heading 3 🧑🏻‍💻',
}) => {
  return (
    <div className={`section-header ${className}`}>
      <div className={`heading ${divClassName}`}>{text}</div>
      <div className={`text-wrapper ${divClassNameOverride}`}>{text1}</div>
    </div>
  );
};

SectionHeader.propTypes = {
  className: PropTypes.string,
  divClassName: PropTypes.string,
  divClassNameOverride: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

SectionHeader.defaultProps = {
  className: '',
  divClassName: '',
  divClassNameOverride: '',
  text: 'Heading 7',
  text1: 'Heading 3 🧑🏻‍💻',
};

export default SectionHeader;
