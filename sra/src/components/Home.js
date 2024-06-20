import React from 'react';
import './Home.css';
import sraLogo from '../SRA.png';

function Home() {
    return (
        <div className="Home">
            <div className="body">
                <img src={sraLogo} alt="SRA" className="logo"/>
                <h1 className="neonTitle">Science Research and Applications</h1>
                <h3 className="neonSubTitle">Scientists, Researchers, and Innovators of tomorrow</h3>
                <p className="description">
                    We are a group of high schoolers dedicated to encouraging others among the youth today to research topics they are interested in. We would appreciate support from our community for our initiative.
                </p>
            </div>
        </div>
    );
}

export default Home;
