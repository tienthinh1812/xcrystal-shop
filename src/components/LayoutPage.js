import { Fragment } from 'react';
import bannerShop from '../assets/img/banner-shop.jpg';

function LayoutBanner(props) {
    return (
        <Fragment>
            <div className="page">
                <div className="page__banner">
                    <img src={bannerShop} alt="" />
                </div>
            </div>
            <div className="container">{props.children}</div>
        </Fragment>
    );
}

export default LayoutBanner;
