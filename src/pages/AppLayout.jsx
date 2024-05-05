import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import * as styles from "./AppLayout.module.css";
import WorldMap from "../components/WorldMap";

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <WorldMap />
        </div>
    );
}

export default AppLayout;