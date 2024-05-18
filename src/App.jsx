import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Routes></Routes>
            </div>
        </Router>
    );
}
