import React, { useState } from 'react';
import CertificadoCard from '../components/Certificados/CertificadoCard';
import certificado1 from '../assets/img/CERTIFICADO-ISO-9001.jpg';
import certificado2 from '../assets/img/CERTIFICADO-NORSOK-S-WA-006-2020.jpg';
import certificado3 from '../assets/img/CERTIFICADO-ISO-45001.jpg';
import certificado4 from '../assets/img/CERTIFICADO-ISO-14001.jpg';
import '../styles/certificados.css';

const CertificadosPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificados = [
    { img: certificado1, title: 'Certificado 1', text: 'LL-C Certification.' },
    { img: certificado2, title: 'Certificado 2', text: 'LL-C Certification.' },
    { img: certificado3, title: 'Sistema de Gestión de la Seguridad y Salud en el Trabajo. (ISO 45001:2018)', text: 'LL-C Certification.' },
    { img: certificado4, title: 'Sistema de Gestión Ambiental. (ISO 14001:2015)', text: 'LL-C Certification.' },
  ];

  const openModal = (index) => {
    setSelectedImage(certificados[index].img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + certificados.length) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <h1 className="titulo">Mis Certificados</h1>
      <div className="grid">
        {certificados.map((certificado, index) => (
          <CertificadoCard
            key={index}
            certificado={certificado.img}
            title={certificado.title}
            text={certificado.text}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Certificado Ampliado" />
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default CertificadosPage;



