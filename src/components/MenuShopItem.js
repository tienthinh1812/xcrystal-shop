import { Link } from 'react-router-dom';

function MenuShopItem(props) {
    const menu = props.menu;
    let path = '';

    if (props.bygenre) {
        path = 'gerne';
    }
    if (props.byformat) {
        path = 'format';
    }

    return (
        <div className="menu-shop__category">
            <div className="menu-shop__heading">{props.heading}</div>
            <ul className="menu-shop__category__menu">
                {menu.map((item, index) => {
                    return (
                        <li key={index} className="menu-shop__category__menu__item">
                            <Link to={`/${path}/${item.slug}`}>{item.display}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MenuShopItem;
