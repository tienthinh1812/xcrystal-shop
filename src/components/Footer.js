import FooterItem from './FooterItem';
import FooterLetter from './FooterLetter';
import FooterMenu from './FooterMenu';

const usefulLinks = [
    { display: 'Community Guidelines', path: '/' },
    { display: 'FAQs', path: '/' },
    { display: 'Privacy Policy', path: '/' },
    { display: 'Service', path: '/' },
];

const ourPartners = [
    { display: 'abc.com', path: '#' },
    { display: 'xyz.com.vn', path: '#' },
    { display: '123.com', path: '#' },
];

const paymentMenthod = [{ display: 'visa' }, { display: 'mastercard' }, { display: 'paypal' }];

const contactUs = [
    { display: 'facebook', path: 'https://www.facebook.com/' },
    { display: 'google', path: 'https://www.google.com/' },
    { display: 'instagram', path: 'https://www.instagram.com/' },
    { display: 'twitter', path: 'https://twitter.com/' },
];

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__menu">
                <li className="footer__menu__item">
                    quick links & payment
                    <div className="footer__menu__item__container">
                        <div className="container">
                            <div className="grid col-2 col-md-2 col-sm-1">
                                <div className="grid col-2">
                                    <FooterItem heading={'useful links'}>
                                        <FooterMenu menu={usefulLinks} to />
                                    </FooterItem>
                                    <FooterItem heading={'our partners'}>
                                        <FooterMenu menu={ourPartners} href />
                                    </FooterItem>
                                </div>
                                <FooterItem heading={'payment menthod'}>
                                    <FooterMenu menu={paymentMenthod} row icon />
                                </FooterItem>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="footer__menu__item">contact us</li>
                <li className="footer__menu__item">
                    don't miss out
                    <div className="footer__menu__item__container">
                        <div className="container">
                            <div className="grid col-2 col-md-2 col-sm-1">
                                <FooterItem heading="newsletter">
                                    <FooterLetter />
                                </FooterItem>
                                <FooterItem heading={'payment menthod'}>
                                    <FooterMenu menu={contactUs} row icon href />
                                </FooterItem>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="footer__menu__item">more theme</li>
            </ul>
        </div>
    );
}

export default Footer;
