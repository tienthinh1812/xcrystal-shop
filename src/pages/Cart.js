import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSecond from '../components/ButtonSecond';
import CartItem from '../components/CartItem';
import Helmet from '../components/Helmet';

function Cart() {
    const storage = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
    const navigate = useNavigate();
    let total = 0;

    return (
        <Helmet title="Cart">
            <div className="cart">
                {storage.length <= 0 ? (
                    <div className="cart__no-result">There are no products in your shopping cart.</div>
                ) : (
                    <Fragment>
                        <table>
                            <thead>
                                <tr>
                                    <th>Remove</th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Quantily</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {storage.map((item, index) => {
                                    total += item.price * item.quantily;
                                    return <CartItem data={item} key={index} />;
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="cart__subtotal">Subtotal:</td>
                                    <td className="cart__total">${total.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="cart__control">
                            <ButtonSecond onClick={() => navigate('/shop')}>Continue shopping</ButtonSecond>
                            <ButtonSecond onClick={() => window.location.reload()}>Update Cart</ButtonSecond>
                            <ButtonSecond>Checkout</ButtonSecond>
                        </div>
                    </Fragment>
                )}
            </div>
        </Helmet>
    );
}

export default Cart;
