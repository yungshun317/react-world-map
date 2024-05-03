import {NavLink} from "react-router-dom";
import * as styles from "./PageNav.module.css";

console.log(styles.nav);

function PageNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;