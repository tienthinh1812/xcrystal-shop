import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Shop from '../pages/Shop';
import LayoutPage from '../components/LayoutPage';
import Category from '../pages/Category';
import Product from '../pages/Product';
import ComingSoon from '../pages/ComingSoon';
import Cart from '../pages/Cart';

const route = [
    { path: '/', component: <Home /> },
    { path: '/shop', component: <Shop />, layout: LayoutPage },
    { path: '/about-us', component: <AboutUs />, layout: LayoutPage },
    { path: '/gerne/:slug', component: <Category />, layout: LayoutPage },
    { path: '/format/:slug', component: <Category />, layout: LayoutPage },
    { path: '/product/:slug', component: <Product /> },
    { path: '/cart', component: <Cart />, layout: LayoutPage },
    { path: '*', component: <ComingSoon />, layout: LayoutPage },
];

export default route;
