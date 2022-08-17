import { useState } from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

import { getBestSeller, getProducts, getSlider } from '../assets/fake-api/products';
import logo from '../assets/img/logo.png';
import banner from '../assets/img/sale-off_1.jpg';
import bannerSecond from '../assets/img/banner-2.jpg';
import bannerName from '../assets/img/name-banner.png';
import Section, { SectionBody, SectionNote, SectionTitle } from '../components/Section';
import CartProduct from '../components/CardProduct';
import Button from '../components/Button';
import ListProducts from '../components/ListProducts';
import Helmet from '../components/Helmet';

function Home() {
    const slider = getSlider();
    const products = getProducts(4);
    const saleOff = getBestSeller();

    const [currentSlider, setCurrentSlider] = useState(1);

    const nextSlider = () => {
        setCurrentSlider((prev) => {
            return currentSlider >= slider.length ? 1 : prev + 1;
        });
    };

    const prevSlider = () => {
        setCurrentSlider((prev) => {
            return currentSlider <= 1 ? slider.length : prev - 1;
        });
    };

    return (
        <Helmet title="Home">
            <div className="slider">
                {slider.map((item) => {
                    return <Slider key={item.id} data={item} currentSlider={currentSlider} />;
                })}
                <div className="slider__control">
                    <div className="slider__control__previous" onClick={() => prevSlider()}></div>
                    <div className="slider__control__next" onClick={() => nextSlider()}></div>
                </div>
            </div>
            <div className="container">
                <div className="crystal">
                    <p>
                        <img src={logo} alt="" />
                    </p>
                    <h2>games & console store</h2>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem. <br />
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit <br /> laboriosam,
                        nisi ut aliquidex eaquota.
                        <br />
                        <br /> commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                </div>
                <Section>
                    <SectionTitle>best seller</SectionTitle>
                    <SectionNote>best-selling games from top developers</SectionNote>
                    <SectionBody>
                        <div style={{ gap: '30px' }} className="grid col-4 col-md-2 col-flex-center">
                            {products.map((item) => {
                                return <CartProduct data={item} key={item.id} margin />;
                            })}
                        </div>
                    </SectionBody>
                </Section>
                <div className="banner">
                    <div className="banner__image">
                        <img src={banner} alt="" />
                    </div>
                    <div className="banner__info">
                        <span>
                            <Link to={'/'}>{saleOff.name}</Link> special edition <br /> sale off to
                        </span>
                        <Button>Buy now</Button>
                    </div>
                </div>
                <ListProducts data={getProducts(6)} home />
            </div>
            <div className="banner-second">
                <div className="banner-second__image">
                    <img src={bannerSecond} alt="" />
                </div>
                <div className="banner-second__info">
                    <div className="container">
                        <div className="banner-second__info__name">
                            <img src={bannerName} alt="" />
                        </div>
                        <div className="banner-second__info__description">{saleOff.description}</div>
                        <Button>Buy now</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

export default Home;
