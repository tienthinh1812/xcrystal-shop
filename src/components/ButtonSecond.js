function ButtonSecond(props) {
    return (
        <div className="btn-second" onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default ButtonSecond;
