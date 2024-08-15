import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const MainLayout = ({ children }) => (
    <>
      <div className='contenedor-layout'>
        <Header className="header" />

        <main className="main">
          {children}
        </main>

        <Footer className="footer" />
      </div>
    </>
);

export default MainLayout;