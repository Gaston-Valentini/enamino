import style from "./Village.module.css";
import Camp from "../../sections/Camp/Camp";

export default function Village() {
    return (
        <section className={style.container}>
            <Camp />
        </section>
    );
}
