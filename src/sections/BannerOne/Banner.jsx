import style from "./BannerOne.module.css";
import { useTranslation } from "react-i18next";

export default function BannerOne() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.text}>{t("bannerOne.text")}</div>
            </div>
        </section>
    );
}
