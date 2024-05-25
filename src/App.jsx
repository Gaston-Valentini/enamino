import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Village from "./views/Village/Village";
import SafarisView from "./views/SafarisView/SafarisView";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Village />} />
                    <Route path="/safaris" element={<SafarisView />} />
                </Routes>
            </div>
        </Router>
    );
}
