import style from "./Map.module.css";
import { APIProvider, Map as MapComponent } from "@vis.gl/react-google-maps";

export default function Map() {
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "400px" }} defaultCenter={{ lat: -2.1406790110213163, lng: 9.59525921055929 }} defaultZoom={10} />
        </APIProvider>
    );
}
