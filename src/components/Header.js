import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import FormLogin from './FormLogin';

function Header() {
    const [isActive, setIsActive] = useState(false);
    const refHeader = useRef();
    const storage = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

    const activeModal = () => {
        document.body.classList.toggle('modal');
        setIsActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80 || window.scrollY === 80) {
                refHeader.current.classList.add('shrink');
            } else {
                refHeader.current.classList.remove('shrink');
            }
        });

        return window.removeEventListener('scroll', null);
    }, []);

    return (
        <div className="header" ref={refHeader}>
            <select name="language" className="header__language">
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
            </select>

            <div className="header__logo">
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className="header__menu">
                <div className="header__menu__cart">
                    <div className="header__menu__cart__item">
                        <Link to="/cart">
                            <i className="bx bx-shopping-bag"></i>
                            <span>your cart</span>
                            <p>{storage.length}</p>
                        </Link>
                    </div>
                </div>
                <div className="header__menu__member" onClick={() => activeModal()}>
                    <i className="bx bx-group"></i>
                    <span>member</span>
                </div>
            </div>
            <FormLogin active={isActive} onClick={() => activeModal()} />
        </div>
    );
}

export default Header;
