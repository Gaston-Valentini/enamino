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
                <a
                    href="https://www.petitfute.com/v56217-parc-national-de-loango/c1166-hebergement/c158-hotel/342697-l-eco-village-d-enamino.html"
                    target="_blank"
                >
                    <img src="https://www.petitfute.com/img/widget/logo.jpg" />
                </a>
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
