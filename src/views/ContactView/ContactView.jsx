import style from "./ContactView.module.css";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/contact-header.jpg";
import Form from "../../sections/Form/Form";
import Map from "../../sections/Map/Map";

export default function ContactView() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={"Contact"} />
            <Form />
            <Map />
        </section>
    );
}
