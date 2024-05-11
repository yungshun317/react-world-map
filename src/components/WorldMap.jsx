import * as styles from "./WorldMap.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useState} from "react";
import {useCities} from "../contexts/CitiesContext";

function WorldMap() {
    const navigate = useNavigate();
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([23.6978, 120.9605]);

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer}>
            <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map(city =>
                    <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                        <Popup>
                            <span>{city.emoji}</span> <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}

export default WorldMap;