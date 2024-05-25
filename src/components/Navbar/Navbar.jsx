import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
import { FaSafari } from "react-icons/fa6";
import { Link } from "react-router-dom";
import franceFlag from "../../assets/images/flag-france.jpg";
import spainFlag from "../../assets/images/flag-spain.jpg";
import usaFlag from "../../assets/images/flag-usa.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("fr");
    const [menuMobile, setMenuMobile] = useState(false);

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    };

    const handleMenu = () => {
        setMenuMobile(!menuMobile);
    };

    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <FaSafari className={style.switch} onClick={handleMenu} />
            <ul className={menuMobile ? `${style.links}` : `${style.links} ${style.linksMobile}`}>
                <li className={style.linksLink}>
                    <Link to="/" onClick={handleMenu}>
                        {t("navbar.linkOne")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/safaris" onClick={handleMenu}>
                        {t("navbar.linkTwo")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/" onClick={handleMenu}>
                        {t("navbar.linkThree")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/" onClick={handleMenu}>
                        {t("navbar.linkFour")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/" onClick={handleMenu}>
                        {t("navbar.linkFive")}
                    </Link>
                </li>
            </ul>
            <div className={menuMobile ? `${style.language}` : `${style.language} ${style.languageMobile}`}>
                {language === "fr" && (
                    <div className={style.languageFlag}>
                        <img src={franceFlag} />
                    </div>
                )}
                {language === "es" && (
                    <div className={style.languageFlag}>
                        <img src={spainFlag} />
                    </div>
                )}
                {language === "en" && (
                    <div className={style.languageFlag}>
                        <img src={usaFlag} />
                    </div>
                )}
                <select className={style.languageSelector} onChange={(e) => handleLanguage(e)}>
                    <option value="" hidden>
                        {t("navbar.selectLanguage")}
                    </option>
                    <option value="fr">{t("navbar.france")}</option>
                    <option value="es">{t("navbar.spanish")}</option>
                    <option value="en">{t("navbar.english")}</option>
                </select>
            </div>
        </section>
    );
}
