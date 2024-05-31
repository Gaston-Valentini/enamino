import style from "./TravelersView.module.css";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/travelers-header.jpg";
import Bag from "../../sections/Bag/Bag";
import Donations from "../../sections/Donations/Donations";
import Formalities from "../../sections/Formalities/Formalities";

export default function TravelersView() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={t("travelersHeader")} />
            <Bag />
            <Donations />
            <Formalities />
        </section>
    );
}
