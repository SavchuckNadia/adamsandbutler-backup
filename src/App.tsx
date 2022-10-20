import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routing/AppRoutes';
import { useEffect } from 'react';




export default function App() {
  const isAdmin = window.location.href.includes("admin")

  useEffect(() => {

  }, [window.location.href])

  return (
    <>
      <BrowserRouter>
        {!isAdmin && <Header />}
        <AppRoutes />
        {!isAdmin && <Footer />}
      </BrowserRouter>
    </>
  );
}