import './css/Landing.css';
import vector10 from '../assets/images/Vector 10.png';
import hands from '../assets/images/hands-1.png';
import phone_image from '../assets/images/phone_image1.png';

export const Landing = () => {
  return (
    <div className="landing-page">
      <div className="overlap">
        <div className="text-wrapper">gym together!</div>
        <img className="vector" alt="Vector" src={vector10} />
      </div>
      <div className="frame">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="chat-bubble">
                <div className="bubble-right">
                  <p className="text">i need the extra push</p>
                </div>
              </div>
              <div className="bubble-right-wrapper">
                <div className="chat-bubble-1">
                  <div className="bubble-right-1">
                    <div className="text">who’s free now?</div>
                  </div>
                </div>
              </div>
              <div className="element-hand-with-phone">
                <div className="hand-with-phone">
                  <div className="overlap-group-2">
                    <img className="hands" alt="Hands" src={hands} />
                    <img className="image" alt="Image" src={phone_image} />
                  </div>
                </div>
              </div>
              <div className="chat-bubble-left">
                <p className="p">i don’t know where to start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
