import React from "react";

export default function Info() {
    return (
        <div className="info-container">
            <div className="headshot-container">
                <img src="/images/PaulinaK_headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            <div className="info">
                <h1 className="name">Paulina Koch</h1>
                <h2 className="job-title"> Software Engineer</h2>
                <h3 className="website">
                    <a href="https://aquamarine-rugelach-5aae48.netlify.app/" target="_blank" rel="noopener noreferrer">
                        My Portfolio
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