import * as styles from "./WorldMap.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import {useCities} from "../contexts/CitiesContext";

function WorldMap() {
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);

    const [searchParams] = useSearchParams();
    const mapLat = searchParams.get("lat");
    const mapLng = searchParams.get("lng");

    useEffect(function() {
        if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                className={styles.map}
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
            >
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
                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
}

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick() {
    const navigate = useNavigate();

    useMapEvents({
        click: e => {
            console.log(e);
            /*
            {originalEvent: PointerEvent, containerPoint: Point, layerPoint: Point, latlng: LatLng, type: 'click', ...}
                containerPoint: Point {x: 281, y: 475}
                latlng: LatLng {lat: 40.697299008636755, lng: -1.3183593750000002}
                layerPoint: Point {x: 281, y: 475}
                originalEvent: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, ...}
                sourceTarget: NewClass {options: {...}, _handlers: Array(7), _layers: {...}, _zoomBoundLayers: {...}, _sizeChanged: false, ...}
                target: NewClass {options: {...}, _handlers: Array(7), _layers: {...}, _zoomBoundLayers: {...}, _sizeChanged: false, ...}
                type: "click"
                [[Prototype]]: Object
            */
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        }
    });
}

export default WorldMap;