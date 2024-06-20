import React from 'react';
import abdullah from '../imgs/abdullah.jpg';
import './EmployeeCard.css';

function AbdullahCard() {
    return (
        <div className="employeeCard">
            <div className="employeeImg">
                <img src={abdullah} alt="Abdullah Ahmed" />
            </div>
            <div className="employeeDetails">
                <h3>Abdullah Ahmed</h3>
                <p>Chief Technology Officer</p>
            </div>
        </div>
    );
}

export default AbdullahCard;
