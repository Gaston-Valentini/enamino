import style from "./Village.module.css";
import Camp from "../../sections/Camp/Camp";
import Bungalow from "../../sections/Bungalow/Bungalow";

export default function Village() {
    return (
        <section className={style.container}>
            <Camp />
            <Bungalow />
        </section>
    );
}
