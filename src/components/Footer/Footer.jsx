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
            <div id="fileContent_337595">
                <a href="https://www.petitfute.com" title="Petit Futé">
                    <img src="https://www.petitfute.com/img/widget/logo.jpg" width="100" height="100" border="0" alt="Petit Futé" />
                </a>
            </div>
            <script language="javascript" type="text/javascript" src="https://pro.petitfute.com/compte/widget/etablissement/337595/src/1/"></script>
        </section>
    );
}
