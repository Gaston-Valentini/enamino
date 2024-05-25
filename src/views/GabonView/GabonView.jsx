import style from "./GabonView.module.css";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/gabon-header.jpg";
import Gabon from "../../sections/Gabon/Gabon";

export default function GabonView() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={t("gabonHeader")} />
            <Gabon />
        </section>
    );
}
