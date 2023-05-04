import L, { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerIcon from "../assets/images/icon-location.svg";
import { useEffect, useState } from "react";
import { IpInfoContryCity } from "../models/IpLocation";

const MapCoordinates = ({ data }: { data: IpInfoContryCity | undefined }) => {
    const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);

    const marker = new Icon({
        iconUrl: MarkerIcon,
    });

    function LocationMarker() {
        const map = useMap();

        useEffect(() => {
            map.flyTo(position);
        }, [position]);

        return position === null ? null : (
            <Marker position={position} icon={marker}>
                <Popup>
                    {data ? (
                        <>
                            <p>City: {data.location.city}</p>
                            <p>country: {data.location.country}</p>
                        </>
                    ) : null}
                </Popup>
            </Marker>
        );
    }

    useEffect(() => {
        if (data) {
            const newPosition = [
                data.location.lat,
                data.location.lng,
            ] as LatLngExpression;
            setPosition(newPosition);
        }
    }, [data]);

    return (
        <main>
            <MapContainer
                center={position}
                zoom={13}
                fadeAnimation={true}
                markerZoomAnimation={true}
                style={{ width: "100%", height: "100vh", zIndex: 1 }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <LocationMarker />
            </MapContainer>
        </main>
    );
};

export default MapCoordinates;
