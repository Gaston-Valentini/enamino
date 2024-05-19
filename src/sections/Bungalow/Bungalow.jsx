import style from "./Bungalow.module.css";
import { useTranslation } from "react-i18next";
import bungalowOne from "../../assets/images/bungalow-1.jpg";
import BungalowTwo from "../../assets/images/bungalow-2.jpg";
import BungalowThree from "../../assets/images/bungalow-3.jpg";

export default function Bungalow() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.titles}>
                <p className={style.titlesTitle}>{t("bungalow.title")}</p>
                <div className={style.titlesSubtitle}>{t("bungalow.subtitle")}</div>
            </div>

            <div className={style.data}>
                <ul className={style.dataList}>
                    <li>{t("bungalow.listOne")}</li>
                    <li>{t("bungalow.listTwo")}</li>
                    <li>{t("bungalow.listThree")}</li>
                    <li>{t("bungalow.listFour")}</li>
                    <li>{t("bungalow.listFive")}</li>
                    <li>{t("bungalow.listSix")}</li>
                </ul>
                <ul className={style.dataList}>
                    <li>{t("bungalow.listSeven")}</li>
                    <li>{t("bungalow.listEight")}</li>
                    <li>{t("bungalow.listNine")}</li>
                    <li>{t("bungalow.listTen")}</li>
                    <li>{t("bungalow.listEleven")}</li>
                    <li>{t("bungalow.listTwelve")}</li>
                </ul>
            </div>
            <div className={style.images}>
                <div className={style.imagesImage}>
                    <img src={bungalowOne} />
                </div>
                <div className={style.imagesImage}>
                    <img src={BungalowTwo} />
                </div>
                <div className={style.imagesImage}>
                    <img src={BungalowThree} />
                </div>
            </div>
            <p className={style.text}>{t("bungalow.text")}</p>
        </section>
    );
}
