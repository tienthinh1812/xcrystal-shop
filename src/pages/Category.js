import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsByFormat, getProductsByGenre } from '../assets/fake-api/products';
import CartProduct from '../components/CardProduct';

function Category() {
    const { pathname } = useLocation();
    const path = pathname.split('/');

    let products = [];

    if (path[1] === 'gerne') {
        products = getProductsByGenre(path[2]);
    }

    if (path[1] === 'format') {
        products = getProductsByFormat(path[2]);
    }

    return (
        <Fragment>
            <div className="page__panel">
                <p>Category</p>
            </div>
            <div className="page__master">
                {products.length > 0 ? (
                    <div style={{ gap: '30px' }} className="grid col-4 col-md-3 col-flex-center">
                        {products.map((item, index) => {
                            return <CartProduct key={index} data={item} />;
                        })}
                    </div>
                ) : (
                    <div className="page__master__no-product">
                        <p>no result</p>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default Category;
