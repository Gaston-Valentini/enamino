import style from "./Donations.module.css";
import { useTranslation } from "react-i18next";

export default function Donations() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <p className={style.title}>{t("donations.title")}</p>
                <p className={style.text}>{t("donations.text")}</p>
            </div>
        </section>
    );
}
