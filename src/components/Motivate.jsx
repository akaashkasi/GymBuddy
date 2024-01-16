// Motivate.jsx
import './css/Motivate.css';
import PhoneLeft from '../assets/images/Phone-left.png';
import PhoneRight from '../assets/images/Phone-right.png';
import PhoneMiddle from '../assets/images/Phone-middle.png';

const Motivate = () => {
  return (
    <div className="feature-brief">
      <div className="section-header">
        <h1>How It Works</h1>
        <h2>Find people who motivate you 🏋️</h2>
      </div>
      <div className="features">
        <div className="feature">
          <img
            className="phone-image"
            alt="Set your gym style"
            src={PhoneLeft}
          />
          <div className="feature-card">
            <h2>Set your gym style</h2>
            <p>Matches are made based on your schedule, goals, and interests</p>
          </div>
        </div>
        <div className="feature">
          <img className="phone-image" alt="Get matched" src={PhoneRight} />
          <div className="feature-card">
            <h2>Get matched</h2>
            <p>
              Through friend requests or our Quick Pair auto-matching system
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="phone-image" alt="Gym together!" src={PhoneMiddle} />
          <div className="feature-card">
            <h2>Gym together!</h2>
            <p>Chat, send invites, and meet up for a pumped session</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivate;
