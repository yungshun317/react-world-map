import * as styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import {Outlet} from "react-router-dom";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            { /* <p>List of Cities</p> */ }

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by React World Map
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;