import React from 'react';
import './FullWidthSection.css'; // Importa el archivo CSS para estilos

const FullWidthSection = ({ title, description, pdfUrl }) => {
  return (
    <div className="full-width-section">
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="download-button">
          VER PDF
        </a>
      </div>
    </div>
  );
};

export default FullWidthSection;
