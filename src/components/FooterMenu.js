import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FooterMenu(props) {
    const menu = props.menu;
    return (
        <ul className={`footer-item__menu ${props.row ? 'row' : ''}`}>
            {menu.map((item, index) => {
                const newProps = {};
                let Tag = 'span';

                if (props.href) {
                    newProps.href = item.path;
                    Tag = 'a';
                }

                if (props.to) {
                    newProps.to = item.path;
                    Tag = Link;
                }

                return (
                    <li key={index} className={props.icon ? 'icon' : ''}>
                        <Tag {...newProps}>
                            {props.icon ? <i className={`bx bxl-${item.display}`}></i> : item.display}
                        </Tag>
                    </li>
                );
            })}
        </ul>
    );
}

FooterMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    icon: PropTypes.bool,
    row: PropTypes.bool,
    to: PropTypes.bool,
    href: PropTypes.bool,
};

export default FooterMenu;
