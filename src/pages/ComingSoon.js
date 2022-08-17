import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';

function ComingSoon() {
    return (
        <Helmet title="Coming Soon">
            <div className="coming-soon">
                <h2>coming soon</h2>
                <p>We're coming soon! We're working hard to give you the experience!</p>
                <div className="coming-soon__btn">
                    <Link to={'/'}>Back to homepage</Link>
                </div>
            </div>
        </Helmet>
    );
}

export default ComingSoon;
