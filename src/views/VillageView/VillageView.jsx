import style from "./VillageView.module.css";
import Header from "../../sections/Header/Header";
import Camp from "../../sections/Camp/Camp";
import Bungalow from "../../sections/Bungalow/Bungalow";
import Menu from "../../sections/Menu/Menu";
import Enviroment from "../../sections/Enviroment/Enviroment";

export default function VillageView() {
    return (
        <section className={style.container}>
            <Header />
            <Camp />
            <Bungalow />
            <Menu />
            <Enviroment />
        </section>
    );
}
