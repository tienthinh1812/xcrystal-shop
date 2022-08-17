import imageProduct01 from '../img/ac4-product.jpg';
import imageProduct02 from '../img/fallout4-product.jpg';
import imageProduct03 from '../img/cod4-product.jpg';
import imageProduct04 from '../img/xcom2-product.jpg';
import imageProduct05 from '../img/thesim4-product.jpg';
import imageProduct06 from '../img/quantum-product.jpg';
import imageProduct07 from '../img/raiders-product.jpg';
import imageProduct08 from '../img/warcraft-product.jpg';

import imageBanner01 from '../img/ac4-banner.jpg';
import imageBanner02 from '../img/fallout4-banner.jpg';
import imageBanner03 from '../img/cod4-banner.jpg';
import imageBanner04 from '../img/xcom2-banner.jpg';
import imageBanner05 from '../img/thesim4-banner.jpg';
import imageBanner06 from '../img/quantum-banner.jpg';
import imageBanner07 from '../img/raiders-banner.png';
import imageBanner08 from '../img/warcraft-banner.jpg';

import imageSlider01 from '../img/ac4-slide.jpg';
import imageSlider02 from '../img/fallout4-slide.jpg';
import imageSlider03 from '../img/cod4-slide.jpg';
import imageSlider04 from '../img/xcom2-slide.jpg';

const products = [
    {
        id: 1,
        name: 'Assassins Creed 4',
        description:
            'Nihil laborum qui harum maxime nibh maiores cubilia, voluptatibus turpis, posuere, tempor. Condimentum dolorem, ultricies convallis at natoque, assumenda cum! Excepteur posuere! Aperiam feugiat! Luctus non doloribus sunt, justo occaecat dicta fugit porttitor. Vehicula asperiores pede parturient minim! Consequatur ipsa? Laudantium hymenaeos, illo senectus dignissimos consequat perferendis quod, eaque aenean accusantium parturient risus arcu autem, rutrum, quisque! Commodo eveniet bibendum, amet penatibus, dignissim, ridiculus tempor enim, laudantium aliquip, duis. Nostrud!',
        price: 24.0,
        imgProduct: imageProduct01,
        imgBanner: imageBanner01,
        imgSlider: imageSlider01,
        genre: ['action', 'adventure'],
        format: ['nintendo-3ds-2ds', 'pc'],
        slug: 'assasins-creed-4',
        intro: 'https://www.youtube.com/embed/kT0VWhyEXX0',
    },
    {
        id: 2,
        name: 'Fallout 4',
        description:
            'Facilisi felis culpa potenti enim officiis tempor primis natus? Nisi tempor incididunt rutrum ducimus pretium penatibus! Tincidunt optio. Nam magni inventore iaculis cum cupidatat nisi cupidatat eos, ipsum feugiat reprehenderit? Tempor adipisicing magni irure laboriosam dignissimos, architecto tellus leo excepteur, torquent dis purus parturient incididunt. Occaecati adipisci convallis. Eu dictum mollis nostrum provident voluptatum! Maxime sed. Dapibus. Primis, veritatis ac et laoreet, tortor sollicitudin quo cras, nostra esse, feugiat dolores',
        price: 19.99,
        imgProduct: imageProduct02,
        imgBanner: imageBanner02,
        imgSlider: imageSlider02,
        genre: ['free-to-play', 'casual'],
        format: ['nintendo-wii-uwiii', 'playstation-3'],
        slug: 'fallout-4',
        intro: 'https://www.youtube.com/embed/COY_aY8KiPI',
    },
    {
        id: 3,
        name: 'Call of duty 4',
        description:
            'Sint hendrerit qui consequat scelerisque quisquam? Maecenas litora voluptatibus mus? Nesciunt mi, elit! Incididunt massa habitasse voluptate, elementum animi, exercitationem delectus sociosqu, esse lectus eget delectus? Iaculis blandit. Occaecat nisi, nam nullam! Optio minima nostra quidem veritatis error sit nobis rem vivamus, pretium pulvinar, ipsum dolorum incidunt erat! At, magna maiores? Est et nobis lectus aperiam, sapiente potenti? Aspernatur assumenda eligendi vulputate ac id pariatur molestiae! Rerum penatibus egestas cras dolorum interdum semper ligula ratione, architecto.',
        price: 23.0,
        imgProduct: imageProduct03,
        imgBanner: imageBanner03,
        imgSlider: imageSlider03,
        genre: ['massively-multiplayer', 'rpg'],
        format: ['nintendo-3ds-2ds', 'playstation-4'],
        slug: 'call-of-duty-4',
        intro: 'https://www.youtube.com/embed/COY_aY8KiPI',
    },
    {
        id: 4,
        name: 'X com 2',
        description:
            'Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum',
        price: 59.99,
        imgProduct: imageProduct04,
        imgBanner: imageBanner04,
        imgSlider: imageSlider04,
        genre: ['early-access', 'racing'],
        format: ['pc', 'playstation-3'],
        slug: 'x-com-2',
        intro: 'https://www.youtube.com/embed/n3bENBYSucQ',
    },
    {
        id: 5,
        name: 'The sim 4',
        description:
            'Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum',
        price: 39.99,
        imgProduct: imageProduct05,
        imgBanner: imageBanner05,
        genre: ['action', 'massively-multiplayer'],
        format: ['playstation-vita', 'xbox-360'],
        slug: 'the-sim-4',
        intro: 'https://www.youtube.com/embed/MIW6kougM6w',
    },
    {
        id: 6,
        name: 'Quantum break',
        description:
            'Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum',
        price: 27.9,
        imgProduct: imageProduct06,
        imgBanner: imageBanner06,
        genre: ['adventure', 'action'],
        format: ['xbox-360', 'playstation-4'],
        slug: 'quantum-break',
        intro: 'https://www.youtube.com/embed/ruY1eT9bXiw',
    },
    {
        id: 7,
        name: 'Raiders of the broken planet',
        description:
            'Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum',
        price: 39.99,
        imgProduct: imageProduct07,
        imgBanner: imageBanner07,
        genre: ['indie', 'racing'],
        format: ['pc', 'playstation-4'],
        slug: 'riders-of-the-broken-planet',
        intro: 'https://www.youtube.com/embed/cRuvD5RT3-M',
    },
    {
        id: 8,
        name: 'World of warcraft',
        description:
            'Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum',
        price: 49.99,
        imgProduct: imageProduct08,
        imgBanner: imageBanner08,
        genre: ['rpg', 'casual'],
        format: ['pc', 'nintendo-wii-uwii'],
        slug: 'world-of-warcraft',
        intro: 'https://www.youtube.com/embed/cRuvD5RT3-M',
    },
];

export const getAllProducts = () => products;

export const getProducts = (number) => {
    const start = Math.floor(Math.random() * (products.length - number));
    return products.slice(start, start + number);
};

export const getProductBySlug = (slug) => {
    const newProduct = products.find((item) => {
        return item.slug === slug;
    });

    return newProduct;
};

export const getSlider = () => {
    const slider = products.filter((item) => {
        return item.imgSlider;
    });

    return slider;
};

export const getBestSeller = () => products[0];

export const getProductsByGenre = (slug) => {
    const newProducts = products.filter((item) => {
        return item.genre.includes(slug);
    });

    return newProducts;
};

export const getProductsByFormat = (slug) => {
    const newProducts = products.filter((item) => {
        return item.format.includes(slug);
    });

    return newProducts;
};
