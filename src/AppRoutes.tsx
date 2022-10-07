import AboutUs from './pages/AboutUs/AboutUs';
import Destinations from './pages/Destinations/Destinations';
import Home from './pages/Home/Home'
import PrivateRentals from './pages/PrivateRentals/PrivateRentals';
import TailoredExperiences from './pages/TailoredExperiences/TailoredExperiences';
import NewsAndPress from './pages/NewsAndPress/NewsAndPress';
import ContactUs from './pages/ContactUs/ContactUs';
import { useRoutes } from 'react-router-dom';






const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/experiences',
            element: <TailoredExperiences />
        },
        {
            path: '/destinations',
            element: <Destinations />
        },
        {
            path: '/private-rentals',
            element: <PrivateRentals />
        },
        {
            path: '/about-us',
            element: <AboutUs />
        },
        {
            path: '/news-and-press',
            element: <NewsAndPress />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        },
        {
            path: '/your-wishlist',
            element: <ContactUs />
        },

    ])
    return element
}

export default AppRoutes