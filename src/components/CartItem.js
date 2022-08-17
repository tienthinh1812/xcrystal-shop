import ButtonSecond from './ButtonSecond';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CartItem(props) {
    const data = props.data;
    const storage = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

    const [quantily, setQuantily] = useState(data.quantily);

    const handleRemove = (index) => {
        const newStorage = storage.filter((item) => {
            return item.id !== index;
        });
        localStorage.setItem('item', JSON.stringify(newStorage));
        window.location.reload();
    };

    const handleUpdate = (e) => {
        setQuantily(e.target.value);
        storage.forEach((item) => {
            if (item.id === data.id) {
                item.quantily = e.target.value;
            }
        });
        localStorage.setItem('item', JSON.stringify(storage));
    };

    return (
        <tr>
            <td className="cart__remove">
                <ButtonSecond onClick={() => handleRemove(data.id)}>Remove</ButtonSecond>
            </td>
            <td></td>
            <td className="cart__name">
                <Link to={`/product/${data.slug}`}>{data.name}</Link>
            </td>
            <td className="cart__quantily">
                <input type="number" min={0} defaultValue={data.quantily} onChange={(e) => handleUpdate(e)} />
            </td>
            <td className="cart__total">${data.price * quantily}</td>
        </tr>
    );
}

export default CartItem;
