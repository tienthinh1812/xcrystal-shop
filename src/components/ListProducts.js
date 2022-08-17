import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CardProduct';
import Section, { SectionBody, SectionNote, SectionTitle } from './Section';
import { byGenre, byFormat } from '../assets/fake-api/category';

function ListProducts(props) {
    const refList = useRef();

    const data = props.data;
    const perload = 6;
    const element = [];

    const [index, setIndex] = useState();
    const [products, setProducts] = useState([]);

    const page = data.length % perload === 0 ? data.length / perload : Math.floor(data.length / perload) + 1;

    for (let i = 0; i < page; i++) {
        element[i] = i;
    }

    const handleFilter = (action, key) => {
        switch (action) {
            case 'genre':
                let newProducts = data.filter((product) => {
                    return product.genre.includes(key);
                });
                setProducts(newProducts);
                refList.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

                break;
            case 'format':
                if (key === 'All format') {
                    setProducts(data);
                } else {
                    let newProducts = data.filter((product) => {
                        return product.format.includes(key);
                    });
                    setProducts(newProducts);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const start = index * perload;
        const end = start + perload;
        const newProduct = data.slice(start, end);
        setProducts(newProduct);
    }, [index, data]);

    useEffect(() => {
        setIndex(0);
        setProducts(data);
    }, [data]);

    return (
        <div className="master" ref={refList}>
            <div style={{ gap: '30px' }} className="grid col-25 col-sm-1">
                <div className="master__menu-products">
                    <Section>
                        <SectionTitle>browse by genre</SectionTitle>
                        <SectionNote>NAM LIBERO TEMPORE SOLUTA </SectionNote>
                        <SectionBody>
                            <ul className="master__menu-products__list">
                                {byGenre.map((item, index) => {
                                    return (
                                        <li
                                            className="master__menu-products__list__item"
                                            key={index}
                                            onClick={() => {
                                                handleFilter('genre', item.slug);
                                            }}
                                        >
                                            {item.display}
                                        </li>
                                    );
                                })}
                            </ul>
                        </SectionBody>
                    </Section>
                </div>

                {/* Sản phẩm */}
                <div className="master__list-products">
                    <div className="master__list-products__sort">
                        <div className="master__list-products__sort__container">
                            <p>sort by:</p>
                            <select
                                className="master__list-products__sort__select"
                                onChange={(e) => {
                                    handleFilter('format', e.target.value);
                                }}
                            >
                                <option value="All format">All format</option>
                                {byFormat.map((item, index) => {
                                    return (
                                        <option key={index} value={item.slug}>
                                            {item.display}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="master__list-products__sort__result">
                            <p>
                                have <span>{products.length}</span> result
                            </p>
                        </div>
                    </div>
                    <div style={{ gap: '30px' }} className="grid col-3 col-md-2 col-flex-center">
                        {products.map((item, index) => {
                            return <CartProduct data={item} key={index} />;
                        })}
                    </div>

                    {props.home ? (
                        <div className="master__list-products__view-all">
                            <Link to={'/shop'}>
                                view all results <i className="bx bx-right-arrow-alt"></i>
                            </Link>
                        </div>
                    ) : (
                        //Phân trang
                        <ul className="master__list-products__pagination">
                            {/* Nút previous */}
                            {index > 0 ? (
                                <Fragment>
                                    <li className="master__list-products__pagination__item">
                                        <i
                                            className="bx bxs-chevrons-left"
                                            onClick={() => setIndex(index - 3 < 0 ? 0 : index - 3)}
                                        ></i>
                                    </li>
                                    <li
                                        className="master__list-products__pagination__item"
                                        onClick={() => setIndex(index - 1)}
                                    >
                                        <i className="bx bxs-chevron-left"></i>
                                    </li>
                                </Fragment>
                            ) : null}

                            {element.map((item) => {
                                return (
                                    <li
                                        key={item}
                                        className={`master__list-products__pagination__item ${
                                            item === index ? 'active' : ''
                                        }`}
                                        onClick={() => setIndex(item)}
                                    >
                                        {item + 1}
                                    </li>
                                );
                            })}

                            {/* Nút next */}
                            {index < page - 1 ? (
                                <Fragment>
                                    <li
                                        className="master__list-products__pagination__item"
                                        onClick={() => setIndex(index + 1)}
                                    >
                                        <i className="bx bxs-chevron-right"></i>
                                    </li>
                                    <li
                                        className="master__list-products__pagination__item"
                                        onClick={() => setIndex(index + 3 > page - 1 ? page - 1 : index + 3)}
                                    >
                                        <i className="bx bxs-chevrons-right"></i>
                                    </li>
                                </Fragment>
                            ) : null}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListProducts;
