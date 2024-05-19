import Nehal from '../Pictures/nehal.jpg';
import './nehalCard.css';

function NehalCard() {
    return (
        <div className="nehalCard">
            <img className="per" alt="nehal" src={Nehal} />
            <div className="text">
                <p className="name">Nehal Inturi</p>
                <p className="title">Chief Executive Officer</p>
            </div>
        </div>
    );
}

export default NehalCard;
