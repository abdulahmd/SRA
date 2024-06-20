import React from 'react';
import './Apply.css';

function Apply() {
    return (
        <div className="Apply">
            <div className="headerWrapper">
                <h3 className="neonSubTitle">Apply</h3>
            </div>
            <div className="formContainer">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdDTuc8LLmRatTqfcVjDiHyOEUidy2A3bOVngx2aDYcEPgTpw/viewform?embedded=true" 
                    width="640" 
                    height="1588" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                    title="Application Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}

export default Apply;
