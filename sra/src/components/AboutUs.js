import './AboutUs.css';
import NehalCard from "./nehalCard.js";
import ArnavCard from "./arnavCard.js";
import SaiCard from "./saiCard.js";
import AbdullahCard from './abdullahCard.js';
function AboutUs() {
  return (
    <div className="AboutUs">
        <div className="abt">
            <h3 className="neonSubTitle">About Us</h3>
            <div className="cardContainer">
              <NehalCard />
              <ArnavCard />
            </div>
            <div className="cardContainer">
              <SaiCard />
              <AbdullahCard />
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
