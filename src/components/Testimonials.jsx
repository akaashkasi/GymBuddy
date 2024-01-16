// Testimonials.jsx
import './css/Testimonials.css';

// Add your image imports here
import Testimonial1 from '../assets/images/Testimonials1.png'; // Replace with your image paths
import Testimonial2 from '../assets/images/Testimonials2.png';
import Testimonial3 from '../assets/images/Testimonials3.png';

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-heading">
        <h2 className="heading">What Our Users Say</h2>
        <h1 className="heading-2">Find your community 💙</h1>
      </div>
      <div className="testimonial-images">
        <div className="testimonial-img-container">
          <img
            className="testimonial-img"
            alt="User Testimonial"
            src={Testimonial1}
          />
        </div>
        <div className="testimonial-quote">
          <p>This is for people who don’t want to skip gym day.</p>
          <span>Sophie, UC Berkeley</span>
          <span>Class of ‘24</span>
        </div>
        <div className="testimonial-img-container">
          <img
            className="testimonial-img"
            alt="User Testimonial"
            src={Testimonial2}
          />
        </div>
        <div className="testimonial-img-container">
          <img
            className="testimonial-img"
            alt="User Testimonial"
            src={Testimonial3}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
