import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Phones from './pages/Phones';
import Computing from './pages/Computing';
import Gaming from './pages/Gaming';
import Pccomps from './pages/Pccomps';
import Location from './pages/Locations';
import Locations from './pages/Locations';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas que NO usan Header y Footer */}
        <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
        <Route path="/register" element={<Register />} /> {/* Ruta de Register */}

        {/* Rutas que SÍ usan Header y Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/sedes" element={<Locations />} />
          <Route path="/computacion" element={<Computing />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/pc" element={<Pccomps />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

// Layout con Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <Footer />
    </>
  );
};

// Componente para manejar rutas no encontradas
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;