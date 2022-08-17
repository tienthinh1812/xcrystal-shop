import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBestSeller } from '../assets/fake-api/products';

function MenuShopBestSeller() {
    const [bestSeller, setBestSeller] = useState({});

    useEffect(() => {
        setBestSeller(getBestSeller());
    }, []);

    return (
        <div className="menu-shop__best-seller">
            <div className="menu-shop__best-seller__container">
                <h2 className="menu-shop__heading">best seller</h2>
                <div className="menu-shop__best-seller__container__image">
                    <img src={bestSeller.imgProduct} alt="" />

                    <div className="menu-shop__best-seller__container__image__info">
                        <div className="menu-shop__best-seller__container__image__info__name">
                            <Link to={`/product/${bestSeller.slug}`}>{bestSeller.name}</Link>
                        </div>
                        <div className="menu-shop__best-seller__container__image__info__decs">
                            {bestSeller.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuShopBestSeller;
