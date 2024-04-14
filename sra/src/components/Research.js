import './Research.css';
import Res1 from '../Research1.png';


function Research() {
  return (
    <div className="Research">
        <div className="res">
            <h3 className="neonSubTitle">Publications</h3>
            <a href="https://drive.google.com/file/d/1oUQfXS4BTFhf9tqFh-qM-FXR47bHOV1H/view?usp=sharing">
              <img className="Research1" src={Res1} alt="A Qualitative Study of Chronic Kidney Disease in Rural India, the Incidences of It, and How We Can Prevent It"></img>
            </a>
           
        </div>
    </div>
  );
}


export default Research;
