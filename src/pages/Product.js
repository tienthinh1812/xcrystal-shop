import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getProductBySlug, getProducts } from '../assets/fake-api/products';
import Button from '../components/Button';
import CartProduct from '../components/CardProduct';
import Helmet from '../components/Helmet';
import RecentGame from '../components/RecentGame';

function Product() {
    const slug = useParams();
    const navigate = useNavigate();
    const storage = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : '';

    const product = getProductBySlug(slug.slug);
    const quantily = useRef();

    const [showIntro, setShowIntro] = useState(false);

    const handleShow = () => {
        setShowIntro(!showIntro);
    };

    useEffect(() => {
        if (showIntro) {
            document.body.classList.add('modal');
        } else {
            document.body.classList.remove('modal');
        }
    }, [showIntro]);

    const handleAddCart = () => {
        const newCart = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            quantily: quantily.current.value,
            price: product.price,
        };
        localStorage.setItem('item', JSON.stringify([...storage, newCart]));
        navigate('/cart');
    };

    return (
        <Helmet title={product.name}>
            <div className="product">
                <div className="product__banner">
                    <img src={product.imgBanner} alt="" />
                    <div className="product__banner__circle" onClick={() => handleShow()}>
                        <div className="product__banner__circle__play">
                            <i className="bx bx-play"></i>
                        </div>
                    </div>
                    <div className={`product__banner__video ${showIntro ? 'show' : ''}`}>
                        <div className="product__banner__video__cover" onClick={() => handleShow()}></div>
                        <div className="product__banner__video__content">
                            <iframe
                                title="frame"
                                height="480"
                                width="854"
                                src={showIntro ? product.intro : ''}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="product__main">
                    <div className="container">
                        <div className="product__main__layout">
                            <div className="product__main__image">
                                <CartProduct data={product} />
                            </div>
                            <div className="product__main__info">
                                <div className="product__main__info__name">{product.name}</div>
                                <div className="product__main__info__description">{product.description}</div>
                                <div className="product__main__info__note">
                                    <span>please note </span>
                                    Prices in GAME Stores may differ
                                </div>
                                <div className="product__main__info__input">
                                    <input type="number" min={0} ref={quantily} defaultValue={1} />
                                    <div className="product__main__info__input__price">${product.price}</div>
                                </div>
                                <Button onClick={() => handleAddCart()}>Add to cart</Button>
                            </div>
                        </div>
                        <RecentGame data={getProducts(4)} margin />
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

export default Product;
