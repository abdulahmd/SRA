import React from 'react';
import './Research.css';
import Res1 from '../Research1.png';

function Research() {
    return (
        <div className="Research">
            <div className="res">
                <h3 className="neonSubTitle">Publications</h3>
                <a href="https://docs.google.com/presentation/d/1_1p7xv1zlL6ihhd46XJJj5NrTGGU26SC7l3lTLuv8jE/preview?slide=id.g273e37ce7d3_0_5">
                    <img className="Research1" src={Res1} alt="A Qualitative Study of Chronic Kidney Disease in Rural India, the Incidences of It, and How We Can Prevent It"/>
                </a>
            </div>
        </div>
    );
}

export default Research;
