import style from "./Camp.module.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/header.jpg";
import image2 from "../../assets/images/camp.jpg";

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
            <Carousel>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
            </Carousel>
        </section>
    );
}
