import React from 'react';
import './AboutUs.css';
import NehalCard from './cards/nehalCard';
import ArnavCard from './cards/arnavCard';
import AbdullahCard from './cards/abdullahCard';
import SaiCard from './cards/saiCard';

function AboutUs() {
    return (
        <div className="AboutUs">
            <div className="abt">
                <div className="neonSubTitleWrapper">
                    <h2 className="neonSubTitle">About Us</h2>
                </div>
                <div className="employeeCards">
                    <NehalCard />
                    <ArnavCard />
                    <AbdullahCard />
                    <SaiCard />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
