import style from "./Biodiversity.module.css";
import { useTranslation } from "react-i18next";

export default function Biodiversity() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <p className={style.title}>{t("biodiversity.title")}</p>
                <p className={style.textOne}>{t("biodiversity.textOne")}</p>
                <p className={style.textTwo}>{t("biodiversity.textTwo")}</p>
            </div>
        </section>
    );
}
