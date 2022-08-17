function Button(props) {
    return (
        <div className="btn" onClick={props.onClick}>
            {props.children}
            <i className="bx bx-right-arrow-alt"></i>
        </div>
    );
}

export default Button;
