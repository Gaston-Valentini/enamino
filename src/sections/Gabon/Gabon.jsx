import style from "./Gabon.module.css";
import { useTranslation } from "react-i18next";

export default function Gabon() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.content}>
                    <p className={style.title}>{t("gabon.title")}</p>
                    <div className={style.data}>
                        <p className={style.dataText}>{t("gabon.textOne")}</p>
                        <p className={style.dataText}>{t("gabon.textTwo")}</p>
                        <ul className={style.dataList}>
                            <li className={style.dataListElement}>{t("gabon.listOne")}</li>
                            <li className={style.dataListElement}>{t("gabon.listTwo")}</li>
                            <li className={style.dataListElement}>{t("gabon.listThree")}</li>
                            <li className={style.dataListElement}>{t("gabon.listFour")}</li>
                            <li className={style.dataListElement}>{t("gabon.listFive")}</li>
                            <li className={style.dataListElement}>{t("gabon.listSix")}</li>
                            <li className={style.dataListElement}>{t("gabon.listSeven")}</li>
                        </ul>
                        <p className={style.dataText}>{t("gabon.textThree")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
