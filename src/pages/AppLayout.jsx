import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import * as styles from "./AppLayout.module.css";
import WorldMap from "../components/WorldMap";
import User from "../components/User";

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <WorldMap />
            <User />
        </div>
    );
}

export default AppLayout;