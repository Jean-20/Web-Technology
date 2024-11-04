import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/Home/AuthContext';
import Header from './pages/Header';
import Header2 from './pages/Header2';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Phones from './Components/Products/Phones';
import Computing from './Components/Products/Computing';
import Gaming from './Components/Products/Gaming';
import Pccomps from './Components/Products/Pccomps';
import Locations from './pages/Locations';
import DetailsProducts from './Components/Products/DetailsProducts';
import { Outlet } from 'react-router-dom';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas con Header condicional */}
        <Route element={<Layout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/sedes" element={<Locations />} />
          <Route path="/computacion" element={<Computing />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/pc" element={<Pccomps />} />
          <Route path="/Details" element={<DetailsProducts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <Header2 /> : <Header />}
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const NotFound = () => (
  <div>
    <h2>404 - Página No Encontrada</h2>
    <p>Lo sentimos, la página que buscas no existe.</p>
  </div>
);

export default App;
