import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import video from "../../assets/videos/header.mp4";
import logo from "../../assets/images/logo.png";

export default function Header() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <video className={style.video} autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>{t("header.slogan")}</p>
                <p className={style.title}>L' Eco-Village d' Enamino</p>
            </div>
        </section>
    );
}
