import style from "./Map.module.css";
import { APIProvider, Map as MapComponent, Marker } from "@vis.gl/react-google-maps";

export default function Map() {
    const position = { lat: -1.7277, lng: 9.2535 };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "400px" }} defaultCenter={position} defaultZoom={10}>
                <Marker position={position} />
            </MapComponent>
        </APIProvider>
    );
}
