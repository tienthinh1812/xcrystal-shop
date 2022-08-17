import { Link } from 'react-router-dom';

function CartProduct(props) {
    const products = props.data;
    return (
        <div className={`card ${props.margin ? 'margin' : ''}`}>
            <div className="card__image">
                <img src={products.imgProduct} alt="" />
            </div>
            <div className="card__info">
                <Link to={`/product/${products.slug}`}>{products.name}</Link>
                <p>{products.description}</p>
                <span>${products.price}</span>
            </div>
        </div>
    );
}

export default CartProduct;
