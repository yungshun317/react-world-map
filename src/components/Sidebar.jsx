import * as styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of Cities</>

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by React World Map
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;