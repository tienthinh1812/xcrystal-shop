import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuShop from './MenuShop';

const menu = [
    { display: 'home', path: '/' },
    { display: 'shop', path: '/shop' },
    { display: 'about us', path: '/about-us' },
    { display: 'blog', path: '/blog' },
    { display: 'gallery', path: '/gallery' },
    { display: 'forum', path: '/forum' },
    { display: 'contact', path: '/contact' },
];

function PrimaryMenu() {
    const { pathname } = useLocation();
    const refMenu = useRef();

    const [showMenu, setShowMenu] = useState();

    const navActive = menu.findIndex((e) => e.path === pathname);

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    useEffect(() => {
        if (showMenu) {
            document.querySelector('html').classList.add('show-menu');
            document.querySelector('body').classList.add('show-menu');
        } else {
            document.querySelector('html').classList.remove('show-menu');
            document.querySelector('body').classList.remove('show-menu');
        }
    }, [showMenu]);

    return (
        <div className="primary-menu">
            {showMenu ? <div className="primary-menu__cover" onClick={() => setShowMenu(!showMenu)}></div> : null}
            <div className="container">
                <div className="primary-menu__mobile">
                    <div className="primary-menu__mobile_search">
                        <i className="bx bx-search"></i>
                    </div>
                    <div className="primary-menu__mobile_menu" onClick={() => setShowMenu(!showMenu)}>
                        <i className="bx bx-menu"></i>
                    </div>
                </div>
                <ul ref={refMenu} className={`primary-menu__list ${showMenu ? 'show' : ''}`}>
                    {menu.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`primary-menu__list__item ${navActive === index ? 'active' : ''}`}
                            >
                                <Link to={item.path} className="primary-menu__list__item__link">
                                    {item.display}
                                    {item.display === 'shop' ? <i className="bx bx-chevron-down"></i> : null}
                                </Link>
                                {item.display === 'shop' ? <MenuShop /> : null}
                            </li>
                        );
                    })}
                    <li className="primary-menu__list__item__search">
                        <i className="bx bx-search"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PrimaryMenu;
