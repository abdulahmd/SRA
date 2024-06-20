import React from 'react';
import nehal from '../imgs/nehal.jpg';
import './EmployeeCard.css';

function NehalCard() {
    return (
        <div className="employeeCard">
            <div className="employeeImg">
                <img src={nehal} alt="Nehal Inturi" />
            </div>
            <div className="employeeDetails">
                <h3>Nehal Inturi</h3>
                <p>President</p>
            </div>
        </div>
    );
}

export default NehalCard;
