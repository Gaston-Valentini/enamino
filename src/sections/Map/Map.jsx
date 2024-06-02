import style from "./Map.module.css";
import { APIProvider, Map as MapComponent, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import image from "../../assets/images/position.png";

export default function Map() {
    const position = { lat: -1.7277, lng: 9.2535 };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "400px" }} defaultCenter={position} defaultZoom={10} mapId={"7a27bf9a30b47054"}>
                <AdvancedMarker position={position}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={image} height={50} />
                    </Pin>
                </AdvancedMarker>
            </MapComponent>
        </APIProvider>
    );
}
