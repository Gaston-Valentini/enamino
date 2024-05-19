import style from "./Camp.module.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/camp.jpg";

export default function Camp() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataInfo}>
                    <p className={style.dataInfoTitle}>{t("camp.title")}</p>
                    <p className={style.dataInfoText}>{t("camp.text")}</p>
                    <button className={style.dataInfoButton}>{t("camp.button")}</button>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
        </section>
    );
}
