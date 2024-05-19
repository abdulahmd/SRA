import Arnav from '../Pictures/arnav.jpg';
import './arnavCard.css';

function ArnavCard() {
    return (
        <div className="arnavCard">
            <img className="per" alt="arnav" src={Arnav} />
            <div className="text">
                <p className="name">Arnav Gosh</p>
                <p className="title">Vice President</p>
            </div>
        </div>
    );
}

export default ArnavCard;
