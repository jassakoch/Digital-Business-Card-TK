import React from "react";

export default function Info() {
    return (
        <div className="info-container">
            <div className="headshot-container">
                <img src="/images/avataaars.png" alt="headshot" className="headshot" />
            </div>
            <div className="info">
            <h1 className="name">Tim Koch</h1>
            <h2 className="job-title"> Shotcrete Specialists</h2>
            <h3 className="website">Tim Koch Construction Ltd website</h3>
            <button>Email</button>
            </div>

        </div>
    );
}