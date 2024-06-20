import React from 'react';
import sai from '../imgs/sai.jpg';
import './EmployeeCard.css';

function SaiCard() {
    return (
        <div className="employeeCard">
            <div className="employeeImg">
                <img src={sai} alt="Saisatvik Eatrouthu" />
            </div>
            <div className="employeeDetails">
                <h3>Saisatvik Eatrouthu</h3>
                <p>Chief Communications Officer</p>
            </div>
        </div>
    );
}

export default SaiCard;
