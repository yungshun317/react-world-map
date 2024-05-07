import * as styles from "./WorldMap.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";

function WorldMap() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer} onClick={() => {navigate("form")}}>
            <h1>Map</h1>
            <h1>Position: {lat}, {lng}</h1>
            <button
                onClick={() => {
                    setSearchParams({ lat: 23.6978, lng: 120.9605 });
                }}
            >
            </button>
        </div>
    );
}

export default WorldMap;