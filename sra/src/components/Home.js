import React from 'react'
import './Home.css'
import sraLogo from '../SRA.png'
function Home() {
    return (
      <div className="Home">
        <div className="body">
            <img src={sraLogo} alt="SRA"></img>
            <h1 className="neonTitle"><br></br>Science Research and Applications</h1>
            <h3 className="neonSubTitle">Scientists, Researchers, and Innovators of tomorrow</h3>


            <p><br></br><br></br>We are a group of hard working High schoolers dedicated<br></br>to encouraging others among the youth
            <br></br>today to research about topics they are interested in. <br></br>We would appreciate support
            from our<br></br>community for our initiative.</p>






        </div>
      </div>
    );
}


export default Home;