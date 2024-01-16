import TextImage from '../assets/images/TextImage.png';
import './css/AboutUs.css';

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-title">About Us</h2>
      <h1 className="about-heading">Made for students, by students 🧑🏻‍💻</h1>
      <p className="about-text">
        It all started when Matthew couldn’t make gym day, and Eugene didn’t
        want to go alone. They realized the importance of having a buddy to work
        out with consistently. Since then, they have embarked on a mission to
        help every student on their fitness journey.
      </p>
      <div className="about-image-wrapper">
        <img className="text-image" alt="Chat Bubbles" src={TextImage} />
      </div>
    </div>
  );
};

export default AboutUs;
