import style from "./Safaris.module.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/safaris-1.jpg";
import image2 from "../../assets/images/safaris-2.jpg";
import image3 from "../../assets/images/safaris-3.jpg";
import image4 from "../../assets/images/safaris-4.jpg";
import image5 from "../../assets/images/safaris-5.jpg";
import image6 from "../../assets/images/safaris-6.jpg";
import image7 from "../../assets/images/safaris-7.jpg";
import image8 from "../../assets/images/safaris-8.jpg";
import image9 from "../../assets/images/safaris-9.jpg";
import image10 from "../../assets/images/safaris-10.jpg";
import image11 from "../../assets/images/safaris-11.jpg";
import image12 from "../../assets/images/safaris-12.jpg";
import image13 from "../../assets/images/safaris-13.jpg";
import image14 from "../../assets/images/safaris-14.jpg";
import image15 from "../../assets/images/safaris-15.jpg";
import image16 from "../../assets/images/safaris-16.jpg";

import { GiElephant } from "react-icons/gi";

export default function Safaris() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>{t("safaris.title")}</p>
                <p className={style.headingSubtitle}>{t("safaris.subtitle")}</p>
            </div>
            <div className={style.section}>
                <div className={style.sectionHeading}>
                    <p className={style.sectionHeadingTitle}>{t("safaris.sectionOneTitle")}</p>
                </div>
                <div className={style.sectionSafaris}>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariOneTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariOneTextHeading")}</span>
                            {t("safaris.sectionOneSafariOneText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariTwoTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariTwoTextHeading")}</span>
                            {t("safaris.sectionOneSafariTwoText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionOneSafariProgressOneTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionOneSafariProgressOneOne")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneTwo")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneThree")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneFour")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneFive")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneSix")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneSeven")}</li>
                        </ul>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariThreeTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariThreeTextHeading")}</span>
                            {t("safaris.sectionOneSafariThreeText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionOneSafariProgressTwoTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionOneSafariProgressTwoOne")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoTwo")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoThree")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoFour")}</li>
                        </ul>
                    </div>
                </div>
                <div className={style.sectionCarousel}>
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
                    </Carousel>
                </div>
            </div>
            <div className={style.divisor}>
                <hr />
                <GiElephant />
                <hr />
            </div>
            <div className={style.section}>
                <div className={style.sectionHeading}>
                    <p className={style.sectionHeadingTitle}>{t("safaris.sectionTwoTitle")}</p>
                    <p className={style.sectionHeadingSubtitle}>{t("safaris.sectionTwoSubtitle")}</p>
                </div>
                <div className={style.sectionSafaris}>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariOneTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariOneTextHeading")}</span>
                            {t("safaris.sectionTwoSafariOneText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariTwoTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariTwoTextHeading")}</span>
                            {t("safaris.sectionTwoSafariTwoText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariTwoTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariThreeTextHeading")}</span>
                            {t("safaris.sectionTwoSafariThreeText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionTwoSafariProgressTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionTwoSafariProgressOne")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressTwo")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressThree")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressFour")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressFive")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressSix")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressSeven")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressEight")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressNine")}</li>
                        </ul>
                    </div>
                </div>
                <div className={style.sectionCarousel}>
                    <Carousel>
                        <div>
                            <img src={image9} />
                        </div>
                        <div>
                            <img src={image10} />
                        </div>
                        <div>
                            <img src={image11} />
                        </div>
                        <div>
                            <img src={image12} />
                        </div>
                        <div>
                            <img src={image13} />
                        </div>
                        <div>
                            <img src={image14} />
                        </div>
                        <div>
                            <img src={image15} />
                        </div>
                        <div>
                            <img src={image16} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
