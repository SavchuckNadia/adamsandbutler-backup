import AboutUs from '../pages/AboutUs/AboutUs';
import Destinations from '../pages/Destinations/Destinations';
import Home from '../pages/Home/Home'
import PrivateRentals from '../pages/PrivateRentals/PrivateRentals';
import TailoredExperiences from '../pages/TailoredExperiences/TailoredExperiences';
import NewsAndPress from '../pages/NewsAndPress/NewsAndPress';
import ContactUs from '../pages/ContactUs/ContactUs';
import { Route, Routes } from 'react-router-dom';
import YourWishlist from '../pages/YourWishlist/YourWishlist';
import Admin from '../admin/Admin';
import Dashboard from '../admin/scenes/dashboard';
import Team from '../admin/scenes/team';
import Contacts from '../admin/scenes/contacts';
import Invoices from '../admin/scenes/invoices';
import Form from '../admin/scenes/form';
import Calendar from '../admin/scenes/calendar';
import FAQ from '../admin/scenes/faq';
import ProtectedRoute from './ProtectedRoute';
import Testimonials from '../admin/scenes/testimonials';
import Experiences from '../admin/pages/home/Experiences/Experiences';



const AppRoutes = () => {

    return (

        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/experiences" element={<TailoredExperiences />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/private-rentals" element={<PrivateRentals />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/news-and-press" element={<NewsAndPress />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/your-wishlist" element={<YourWishlist />} />


            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                }
            >
                <Route path="admin" element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="form" element={<Form />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="home-experiences" element={<Experiences />} />
  
            </Route>
        </Routes>
    )
}

export default AppRoutes