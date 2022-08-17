import { Fragment } from 'react';

function Helmet(props) {
    document.title = props.title + ' | xCrystal';
    return <Fragment>{props.children}</Fragment>;
}

export default Helmet;
