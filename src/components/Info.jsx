import React from "react";

export default function Info() {
    return (
        <div className="info-container">
            <div className="headshot-container">
                <img src="/images/Tim_headshot.jpg" alt="headshot" className="headshot" />
            </div>
            <div className="info">
                <h1 className="name">Tim Koch</h1>
                <h2 className="job-title"> Shotcrete Specialist</h2>
                <h3 className="website">
                    <a href="https://www.kochconstruction.ca/" target="_blank" rel="noopener noreferrer">
                        Tim Koch Construction Ltd website
                    </a>
                </h3>
                <a href="mailto:pjassakoch@gmail.com" className="email-button">
                    <i className="fas fa-envelope"></i>
                    Email
                </a>
            </div>

        </div>
    );
}