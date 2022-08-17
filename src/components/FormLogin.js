import { Link } from 'react-router-dom';
import Button from './Button';

function FormLogin(props) {
    return (
        <div className={`form-login ${props.active ? 'active' : ''}`}>
            <div className="form-login__modal" onClick={props.onClick}></div>
            <div className="form-login__content">
                <div className="form-login__content__header">
                    <h1>user login</h1>
                    <h2>
                        ONE ACCOUNT FOR EVERY CRYSTAL PRODUCTS.
                        <br /> DON'T HAVE AN ACCOUNT? <Link to={'/'}>SIGN UP NOW!</Link>
                    </h2>
                </div>
                <div className="form-login__content__form">
                    <div className="form-login__content__form__filed">
                        <label htmlFor="username">
                            <i className="bx bx-user"></i>
                            Username:
                        </label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="form-login__content__form__filed">
                        <label htmlFor="password">
                            <i className="bx bx-key"></i>
                            Password:
                        </label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="form-login__content__form__remember">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;
