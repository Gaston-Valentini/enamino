import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-complete.png";

export default function Header() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>{t("header.slogan")}</p>
            </div>
        </section>
    );
}
