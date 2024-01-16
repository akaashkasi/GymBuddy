import { Button } from '../style/Button';
import { SectionHeader } from '../style/SectionHeader';
import '../css/Footer.css';

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <SectionHeader
          className="section-header-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="section-header-2"
          text="The Grind Doesn’t Stop"
          text1="Become a GymBuddy today!"
        />
        <div className="text-wrapper-2">gymbuddy@support.com</div>
      </div>
      <Button className="button-instance" text="Download 🔥" />
    </div>
  );
};

export default Frame;
