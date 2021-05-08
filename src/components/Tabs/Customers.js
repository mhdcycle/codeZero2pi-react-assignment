import Airbnb from '../../assets/airbnb.png';
export default function Customers() {
  return (
    <div id="customers" className="customers">
      <div className="customers-head">
        <h2>Our customers are our biggest fans.</h2>
      </div>
      <div className="customers-text">
        <div>We don't like to brag, but we don't mind letting our customers do it for us.</div>
        <div>Here are a few nice things folks have said about our themes over the years.</div>
      </div>
      <div className="airbnb-img">
        <img src={Airbnb} alt="" />
      </div>
    </div>
  );
}
