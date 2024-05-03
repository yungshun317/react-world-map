import {Link} from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
    return (
        <div>
            <PageNav />
            <h1>React World Map</h1>

            { /* This will reload the page
                <a href="/pricing">Pricing</a>
            */ }
            <Link to="/pricing">Pricing</Link>
        </div>
    );
}

export default Homepage;