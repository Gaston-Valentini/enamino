import style from "./Enviroment.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import imageOne from "../../assets/images/enviroment-1.jpg";
import imageTwo from "../../assets/images/enviroment-2.jpg";
import imageThree from "../../assets/images/enviroment-3.jpg";
import imageFour from "../../assets/images/enviroment-4.jpg";
import imageFive from "../../assets/images/enviroment-5.jpg";

export default function Enviroment() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.content}>
                    <div className={style.heading}>
                        <p className={style.headingTitle}>{t("enviroment.headingTitle")}</p>
                        <p className={style.headingText}>{t("enviroment.headingText")}</p>
                        <Link to={"/"} className={style.headingButton}>
                            {t("enviroment.headingButton")}
                        </Link>
                    </div>
                    <div className={style.cards}>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <p className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleOne")}</p>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextOne")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageOne} />
                            </div>
                        </div>
                        <div className={style.cardsCardRight}>
                            <div className={style.cardsCardImage}>
                                <img src={imageTwo} />
                            </div>
                            <div className={style.cardsCardRightData}>
                                <p className={style.cardsCardRightDataTitle}>{t("enviroment.cardTitleTwo")}</p>
                                <p className={style.cardsCardRightDataText}>{t("enviroment.cardTextTwo")}</p>
                            </div>
                        </div>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <p className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleThree")}</p>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextThree")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageThree} />
                            </div>
                        </div>
                        <div className={style.cardsCardRight}>
                            <div className={style.cardsCardImage}>
                                <img src={imageFour} />
                            </div>
                            <div className={style.cardsCardRightData}>
                                <p className={style.cardsCardRightDataTitle}>{t("enviroment.cardTitleFour")}</p>
                                <p className={style.cardsCardRightDataText}>{t("enviroment.cardTextFour")}</p>
                            </div>
                        </div>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <p className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleFive")}</p>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextFive")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageFive} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
