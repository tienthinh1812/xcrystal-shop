import MenuShopBestSeller from './MenuShopBestSeller';
import MenuShopItem from './MenuShopItem';
import { byGenre, byFormat } from '../assets/fake-api/category';

function MenuShop() {
    return (
        <div className="menu-shop">
            <div className="grid col-2 col-sm-1">
                <div className="grid col-1 col-sm-1">
                    <MenuShopItem heading="by genre" menu={byGenre} bygenre />
                    <MenuShopItem heading="by format" menu={byFormat} byformat />
                </div>
                <MenuShopBestSeller />
            </div>
        </div>
    );
}

export default MenuShop;
