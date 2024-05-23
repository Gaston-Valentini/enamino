import style from "./Village.module.css";
import Camp from "../../sections/Camp/Camp";
import Bungalow from "../../sections/Bungalow/Bungalow";
import Menu from "../../sections/Menu/Menu";
import Enviroment from "../../sections/Enviroment/Enviroment";

export default function Village() {
    return (
        <section className={style.container}>
            <Camp />
            <Bungalow />
            <Menu />
            <Enviroment />
        </section>
    );
}
