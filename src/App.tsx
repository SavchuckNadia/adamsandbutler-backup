import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutUs from './pages/AboutUs/AboutUs';
import Destinations from './pages/Destinations/Destinations';
import Home from './pages/Home/Home'
import PrivateRentals from './pages/PrivateRentals/PrivateRentals';
import TailoredExperiences from './pages/TailoredExperiences/TailoredExperiences';
import NewsAndPress from './pages/NewsAndPress/NewsAndPress';
import ContactUs from './pages/ContactUs/ContactUs';
import YourWishlist from './pages/YourWishlist/YourWishlist';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experiences' element={<TailoredExperiences />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/private-rentals' element={<PrivateRentals />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/news-and-press' element={<NewsAndPress />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/your-wishlist' element={<YourWishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
