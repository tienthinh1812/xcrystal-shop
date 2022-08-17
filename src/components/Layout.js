import Footer from './Footer';
import Header from './Header';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PrimaryMenu from './PrimaryMenu';

function Layout(props) {
    const refMain = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80 || window.scrollY === 80) {
                refMain.current.classList.add('shrink');
            } else {
                refMain.current.classList.remove('shrink');
            }
        });

        return window.removeEventListener('scroll', () => {});
    }, []);

    return (
        <div>
            <Header />
            <div className="main" ref={refMain}>
                <div className="flex">
                    <PrimaryMenu />
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
