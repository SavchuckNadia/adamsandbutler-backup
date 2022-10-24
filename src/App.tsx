import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routing/AppRoutes';
import { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  const isAdmin = window.location.href.includes("admin")

  useEffect(() => {

  }, [window.location.href])

  return (
    <>
      <BrowserRouter>
        {!isAdmin && <Header />}
        <AppRoutes />
        <ToastContainer />
        {!isAdmin && <Footer />}
      </BrowserRouter>
    </>
  );
}