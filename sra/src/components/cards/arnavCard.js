import React from 'react';
import arnav from '../imgs/arnav.jpg';
import './EmployeeCard.css';

function ArnavCard() {
    return (
        <div className="employeeCard">
            <div className="employeeImg">
                <img src={arnav} alt="Arnav Gosh" />
            </div>
            <div className="employeeDetails">
                <h3>Arnav Gosh</h3>
                <p>Vice President</p>
            </div>
        </div>
    );
}

export default ArnavCard;
