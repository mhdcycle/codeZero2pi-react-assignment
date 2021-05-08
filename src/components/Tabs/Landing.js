import Dashkit from '../../assets/dashkit.jpg';
import Experience from '../../assets/experience.png';
export default function Landing(props) {
  return (
    <div id="experience" className="landing">
      <div className="experience-bgimg">
        <img className="experience-img" src={Experience} alt="experience" />
      </div>
      <div className="dashkit-bgimg">
        <img className="dashkit-img" src={Dashkit} alt="dashlit" />
      </div>
    </div>
  );
}
