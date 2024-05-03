import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div>
            <h1>React World Map</h1>

            { /* This will reload the page
                <a href="/pricing">Pricing</a>
            */ }
            <Link to="/pricing">Pricing</Link>
        </div>
    );
}

export default Homepage;