import PropsTypes from 'prop-types';

function FooterItem(props) {
    return (
        <div className="footer-item">
            <h2 className="footer-item__heading">{props.heading}</h2>
            {props.children}
        </div>
    );
}

FooterItem.propsTypes = {
    heading: PropsTypes.string,
};

export default FooterItem;
