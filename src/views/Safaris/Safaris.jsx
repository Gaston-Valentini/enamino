import style from "./Safaris.module.css";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/safaris-header.jpg";
import Loango from "../../sections/Loango/Loango";

export default function Safaris() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={t("safarisHeader")} />
            <Loango />
        </section>
    );
}
