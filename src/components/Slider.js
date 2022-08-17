import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import PropsTypes from 'prop-types';

function Slider(props) {
    const data = props.data;
    const navigate = useNavigate();

    return (
        <div className={`slider__item `}>
            <div className={`slider__item__image ${data.id === props.currentSlider ? 'active' : ''}`}>
                <img src={data.imgSlider} alt="" />
            </div>
            <div className={`slider__item__info ${data.id === props.currentSlider ? 'active' : ''}`}>
                <div className="slider__item__info__name">
                    <Link to={`/product/${data.slug}`}>{data.name}</Link>
                </div>
                <div className="slider__item__info__description">{data.description}</div>
                <div className="slider__item__info__note">
                    <span>PLEASE NOTE</span>
                    Prices in GAME Stores may differ.
                </div>
                <div className="slider__item__info__price">${data.price}</div>
                <Button onClick={() => navigate(`/product/${data.slug}`)}>Add to cart</Button>
            </div>
        </div>
    );
}

Slider.propsTypes = {
    data: PropsTypes.object.isRequired,
    currentSlider: PropsTypes.number,
};

export default Slider;
