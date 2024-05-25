import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VillageView from "./views/VillageView/VillageView";
import SafarisView from "./views/SafarisView/SafarisView";
import GabonView from "./views/GabonView/GabonView";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<VillageView />} />
                    <Route path="/safaris" element={<SafarisView />} />
                    <Route path="/gabon" element={<GabonView />} />
                </Routes>
            </div>
        </Router>
    );
}
