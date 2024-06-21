import style from "./Camp.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/camp-1.jpg";
import image2 from "../../assets/images/camp-2.jpg";
import image3 from "../../assets/images/camp-3.jpg";
import image4 from "../../assets/images/camp-4.jpg";
import image5 from "../../assets/images/camp-5.jpg";
import image6 from "../../assets/images/camp-6.jpg";
import image7 from "../../assets/images/camp-7.jpg";
import image8 from "../../assets/images/camp-8.jpg";
import image9 from "../../assets/images/camp-9.jpg";
import image10 from "../../assets/images/camp-10.jpg";

export default function Camp() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataInfo}>
                    <p className={style.dataInfoTitle}>{t("camp.title")}</p>
                    <p className={style.dataInfoText}>
                        {t("camp.textOne")}
                        <br />
                        <br />
                        {t("camp.textTwo")}
                        <Link to="/contact">{t("camp.link")}</Link>
                        {t("camp.textThree")}
                    </p>
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
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image6} />
                </div>
                <div>
                    <img src={image7} />
                </div>
                <div>
                    <img src={image8} />
                </div>
                <div>
                    <img src={image9} />
                </div>
                <div>
                    <img src={image10} />
                </div>
            </Carousel>
        </section>
    );
}
