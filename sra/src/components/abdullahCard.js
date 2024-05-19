import Abdullah from '../Pictures/abdullah.jpg';
import './abdullahCard.css';

function AbdullahCard() {
    return (
        <div className="abdullahCard">
            <img className="per" alt="abdullah" src={Abdullah} />
            <div className="text">
                <p className="name">Abdullah Ahmed</p>
                <p className="title">Head of Technology</p>
            </div>
        </div>
    );
}

export default AbdullahCard;
