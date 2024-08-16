import React from 'react';
import './SectionV1.css';

const SectionV1 = ({ title, subtitle, content }) => (
    <div className="about-us-container">
        <div className="right-section">
            <span>{title}</span>
            <h3>{subtitle}</h3>
        </div>
        <div className="left-section">
            <p>{content}</p>
        </div>
    </div>
);

export default SectionV1;
