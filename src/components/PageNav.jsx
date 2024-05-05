import {NavLink} from "react-router-dom";
import * as styles from "./PageNav.module.css";
import Logo from "./Logo";

console.log(styles.nav);

function PageNav() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;