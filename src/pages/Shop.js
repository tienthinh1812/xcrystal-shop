import ListProducts from '../components/ListProducts';
import { getAllProducts, getProducts } from '../assets/fake-api/products';
import RecentGame from '../components/RecentGame';
import Helmet from '../components/Helmet';

function Shop() {
    return (
        <Helmet title="Crystal shop">
            <div className="page__panel">
                <p>Crystal shop</p>
            </div>
            <div className="page__master">
                <ListProducts data={getAllProducts()} />
            </div>
            <RecentGame data={getProducts(4)} />
        </Helmet>
    );
}

export default Shop;
