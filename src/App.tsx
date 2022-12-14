import { useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routing/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


export default function App() {
  const location = useLocation();
  const adminRoute = location.pathname.includes('admin')


  return (
    <>
      {!adminRoute && <Header />}
      <AppRoutes />
      {!adminRoute && <Footer />}
      <ScrollToTop />
      <ToastContainer />
    </>
  );
}