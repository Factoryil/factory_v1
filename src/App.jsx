import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Importación dinámica de las páginas
const InicioPage = lazy(() => import('./pages/InicioPage'));
const QuienesSomosPage = lazy(() => import('./pages/QuienesSomosPage'));
const CertificadosPage = lazy(() => import('./pages/CertificadosPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const IngenieriaAmbientalPage = lazy(() => import('./pages/IngenieriaAmbientalPage'));
const IngenieriaCivilPage = lazy(() => import('./pages/IngenieriaCivilPage'));
const IngenieriaElectricaPage = lazy(() => import('./pages/IngenieriaElectricaPage'));
const IngenieriaElectronicaPage = lazy(() => import('./pages/IngenieriaElectronicaPage'));
const IngenieriaIndustrialPage = lazy(() => import('./pages/IngenieriaIndustrialPage'));
const IngenieriaMecanicaPage = lazy(() => import('./pages/IngenieriaMecanicaPage'));
const IngenieriaSistemaPage = lazy(() => import('./pages/IngenieriaSistemaPage'));
const IngenieriasPage = lazy(() => import('./pages/IngenieriasPage'));
const LogisticaPage = lazy(() => import('./pages/LogisticaPage'));
const TransporteCargaPage = lazy(() => import('./pages/TransporteCargaPage'));
const TransporteEspecialPage = lazy(() => import('./pages/TransporteEspecialPage'));
const TransporteHidrocarburosPage = lazy(() => import('./pages/TransporteHidrocarburosPage'));
const TransportesPage = lazy(() => import('./pages/TransportesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout><InicioPage /></Layout>} />
          <Route path="/inicio" element={<Layout><InicioPage /></Layout>} />
          <Route path="/quienes-somos" element={<Layout><QuienesSomosPage /></Layout>} />
          <Route path="/quienes-somos/certificados" element={<Layout><CertificadosPage /></Layout>} />
          <Route path="/ingenierias" element={<Layout><IngenieriasPage /></Layout>}>
            <Route path="ambiental" element={<IngenieriaAmbientalPage />} />
            <Route path="civil" element={<IngenieriaCivilPage />} />
            <Route path="electrica" element={<IngenieriaElectricaPage />} />
            <Route path="electronica" element={<IngenieriaElectronicaPage />} />
            <Route path="industrial" element={<IngenieriaIndustrialPage />} />
            <Route path="mecanica" element={<IngenieriaMecanicaPage />} />
            <Route path="sistema" element={<IngenieriaSistemaPage />} />
          </Route>
          <Route path="/transportes" element={<Layout><TransportesPage /></Layout>}>
            <Route path="carga" element={<TransporteCargaPage />} />
            <Route path="especial" element={<TransporteEspecialPage />} />
            <Route path="hidrocarburos" element={<TransporteHidrocarburosPage />} />
          </Route>
          <Route path="/logistica" element={<Layout><LogisticaPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
          <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;