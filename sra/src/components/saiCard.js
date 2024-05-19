import Sai from '../Pictures/sai.jpg';
import './saiCard.css';

function SaiCard() {
    return (
        <div className="saiCard">
            <img className="per" alt="sai" src={Sai} />
            <div className="text">
                <p className="name">Saisatvik Eatrouthu</p>
                <p className="title">Head of Communications</p>
            </div>
        </div>
    );
}

export default SaiCard;
