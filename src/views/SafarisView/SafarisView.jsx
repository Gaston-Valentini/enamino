import style from "./SafarisView.module.css";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/safaris-header.jpg";
import Loango from "../../sections/Loango/Loango";
import Safaris from "../../sections/Safaris/Safaris";

export default function SafarisView() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={t("safarisHeader")} />
            <Safaris />
            <Loango />
        </section>
    );
}
