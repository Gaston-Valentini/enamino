import style from "./Formalities.module.css";
import { useTranslation } from "react-i18next";
import documents from "../../assets/images/documents.png";
import visa from "../../assets/images/visa.png";
import vaccination from "../../assets/images/vaccination.png";
import insurance from "../../assets/images/insurance.png";
import directions from "../../assets/images/directions.png";

export default function Formalities() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <p className={style.title}>{t("formailities.title")}</p>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={documents} />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardOneTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardOneSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementTwo")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementThree")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementFour")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementFive")}</li>
                        <li className={style.cardsCardListElement}>
                            <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/gabon/#:~:text=Les%20voyageurs%20%C3%A0%20destination%20du% 20Gabón%20are%20held%20%3A&text=of%20pr%C3%A9senter%20un%20%C2%AB%20formular%20covid,d%C3%A8s%20sus%20llegaron%C3%A9e%20au%20Gabón">
                                {t("formailities.cardOneElementSix")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={visa} />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardTwoTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardTwoSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>
                            <p>{t("formailities.cardTwoElementOneTitle")}</p>
                            <ul>
                                <li>{t("formailities.cardTwoElementOneOne")}</li>
                                <li>{t("formailities.cardTwoElementOneTwo")}</li>
                                <li>{t("formailities.cardTwoElementOneThree")}</li>
                            </ul>
                        </li>
                        <li className={style.cardsCardListElement}>
                            <p>{t("formailities.cardTwoElementTwoTitle")}</p>
                            <ul>
                                <li>{t("formailities.cardTwoElementTwoOne")}</li>
                                <li>{t("formailities.cardTwoElementTwoTwo")}</li>
                                <li>
                                    <a href="https://www.dgdi.ga">{t("formailities.cardTwoElementTwoThree")}</a>
                                </li>
                                <li>
                                    <a href="https://www.action-visas.com/visa/Gabon">{t("formailities.cardTwoElementTwoFour")}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={vaccination} />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardThreeTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardThreeSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementTwo")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementThree")}</li>
                        <li className={style.cardsCardListElement}>
                            <a href="http://www.pasteur.fr">{t("formailities.cardThreeElementFour")}</a>
                        </li>
                        <li className={style.cardsCardListElement}>
                            <a href="https://www.libreville-aeroport.com/guide-voyageur/coronavirus-covid-19/">
                                {t("formailities.cardThreeElementFive")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={insurance} />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardFourTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardFourSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFourElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFourElementTwo")}</li>
                        <li className={style.cardsCardListElement}>
                            <a href="http://www.diplomatie.gouv.fr">{t("formailities.cardFourElementThree")}</a>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={directions} />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardFiveTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardFiveSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementTwo")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementThree")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementFour")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementFive")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementSix")}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
