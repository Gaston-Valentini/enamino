import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-complete.png";
import { FaHome, FaUser, FaPhone, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <ul className={style.data}>
                <li className={style.dataElement}>
                    <FaHome />
                    <p>L'Eco-Village d'Enamino - Parc National de Loango - Gabon</p>
                </li>
                <li className={style.dataElement}>
                    <FaUser />
                    <p>Nathalie CARRIÈRE (Nanou)</p>
                </li>
                <li className={style.dataElement}>
                    <FaPhone />
                    <p>WhatsApp +34686067814</p>
                </li>

                <li className={style.dataElement}>
                    <MdAlternateEmail />
                    <p>enamino@gmail.com</p>
                </li>
            </ul>
            <div className={style.widget}>
                <a href="https://www.petitfute.com/v56217-parc-national-de-loango/c1166-hebergement/c158-hotel/342697-l-eco-village-d-enamino.html" target="_blank">
                    <img src="https://www.petitfute.com/img/widget/logo.jpg" />
                </a>
            </div>
            <div className={style.links}>
                <p className={style.linksTitle}>{t("footer.linksTitle")}</p>
                <ul className={style.linksList}>
                    <li>
                        <a href="https://www.routard.com/forums/c/gabon/142" target="_blank">
                            {t("footer.linkOne")}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.petitfute.com/d1298-ogooue-maritime/c1166-hebergement/" target="_blank">
                            {t("footer.linkTwo")}
                        </a>
                    </li>
                    <li>
                        <a href="https://carnetsdevoyages.jeanlou.fr/Le_Parc_de_Loango/" target="_blank">
                            {t("footer.linkThree")}
                        </a>
                    </li>
                    <li>
                        <a href="http://notrevieaugabon.canalblog.com/archives/2012/03/15/24021852.html" target="_blank">
                            {t("footer.linkFour")}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=AIprYvNcn_A" target="_blank">
                            {t("footer.linkFive")}
                        </a>
                    </li>
                </ul>
            </div>
            <script language="javascript" type="text/javascript" src="https://pro.petitfute.com/compte/widget/etablissement/337595/src/1/"></script>
            <div className={style.developer}>
                <p className={style.developerText}>{t("footer.developer")}</p>
                <div className={style.developerIcons}>
                    <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank" className={style.developerIcon}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.gastonvalentini.com/" target="_blank" className={style.developerIcon}>
                        <FaUser />
                    </a>
                </div>
            </div>
        </section>
    );
}
