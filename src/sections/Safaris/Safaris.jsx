import style from "./Safaris.module.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import { GiElephant } from "react-icons/gi";
import safariOne from "../../assets/images/safari-1.jpg";
import safariTwo from "../../assets/images/safari-2.jpg";
import safariThree from "../../assets/images/safari-3.jpg";
import safariFour from "../../assets/images/safari-4.jpg";
import safariFive from "../../assets/images/safari-5.jpg";
import safariSix from "../../assets/images/safari-6.jpg";

export default function Safaris() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <p className={style.title}>{t("safaris.title")}</p>
            <div className={style.safaris}>
                <div className={style.safari}>
                    <Carousel>
                        <div>
                            <img src={safariOne} />
                        </div>
                        <div>
                            <img src={safariTwo} />
                        </div>
                    </Carousel>
                    <div className={style.safariData}>
                        <p className={style.safariDataTitle}>{t("safaris.safariOneTitle")}</p>
                        <div className={style.safariDataInfo}>
                            <div className={style.safariDataInfoSection}>
                                <p className={style.safariDataInfoSectionTitle}>{t("safaris.safariOneInfoTitleOne")}</p>
                                <p className={style.safariDataInfoSectionText}>{t("safaris.safariOneInfoTextOne")}</p>
                            </div>
                        </div>
                        <div className={style.safariDataList}>
                            <p className={style.safariDataListTitle}>{t("safaris.safariOneListTitle")}</p>
                            <ol className={style.safariDataListList}>
                                <li className={style.safariDataListListElement}>{t("safaris.safariOneListOne")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariOneListTwo")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariOneListThree")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariOneListFour")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariOneListFive")}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={style.safariDivisor}>
                    <hr />
                    <GiElephant />
                    <hr />
                </div>
                <div className={style.safari}>
                    <Carousel>
                        <div>
                            <img src={safariOne} />
                        </div>
                        <div>
                            <img src={safariTwo} />
                        </div>
                    </Carousel>
                    <div className={style.safariData}>
                        <p className={style.safariDataTitle}>{t("safaris.safariTwoTitle")}</p>
                        <p className={style.safariDataOptions}>{t("safaris.safariTwoOptions")}</p>
                        <div className={style.safariDataInfo}>
                            <div className={style.safariDataInfoSection}>
                                <p className={style.safariDataInfoSectionTitle}>{t("safaris.safariTwoInfoTitleOne")}</p>
                                <p className={style.safariDataInfoSectionText}>{t("safaris.safariTwoInfoTextOne")}</p>
                            </div>
                            <div className={style.safariDataInfoSection}>
                                <p className={style.safariDataInfoSectionTitle}>{t("safaris.safariTwoInfoTitleTwo")}</p>
                                <p className={style.safariDataInfoSectionText}>{t("safaris.safariTwoInfoTextTwo")}</p>
                            </div>
                        </div>
                        <div className={style.safariDataList}>
                            <p className={style.safariDataListTitle}>{t("safaris.safariTwoListTitle")}</p>
                            <ol className={style.safariDataListList}>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListOne")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListTwo")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListThree")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListFour")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListFive")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListSix")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListSeven")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariTwoListEight")}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={style.safariDivisor}>
                    <hr />
                    <GiElephant />
                    <hr />
                </div>
                <div className={style.safari}>
                    <Carousel>
                        <div>
                            <img src={safariOne} />
                        </div>
                        <div>
                            <img src={safariTwo} />
                        </div>
                    </Carousel>
                    <div className={style.safariData}>
                        <p className={style.safariDataTitle}>{t("safaris.safariThreeTitle")}</p>
                        <div className={style.safariDataInfo}>
                            <div className={style.safariDataInfoSection}>
                                <p className={style.safariDataInfoSectionText}>{t("safaris.safariThreeInfoTextOne")}</p>
                            </div>
                        </div>
                        <div className={style.safariDataList}>
                            <p className={style.safariDataListTitle}>{t("safaris.safariThreeListTitle")}</p>
                            <ol className={style.safariDataListList}>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListOne")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListTwo")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListThree")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListFour")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListFive")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListSix")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListSeven")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariThreeListEight")}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={style.safariDivisor}>
                    <hr />
                    <GiElephant />
                    <hr />
                </div>
                <div className={style.safari}>
                    <Carousel>
                        <div>
                            <img src={safariOne} />
                        </div>
                        <div>
                            <img src={safariTwo} />
                        </div>
                    </Carousel>
                    <div className={style.safariData}>
                        <p className={style.safariDataTitle}>{t("safaris.safariFourTitle")}</p>
                        <div className={style.safariDataInfo}>
                            <div className={style.safariDataInfoSection}>
                                <p className={style.safariDataInfoSectionTitle}>{t("safaris.safariFourInfoTitleOne")}</p>
                                <p className={style.safariDataInfoSectionText}>{t("safaris.safariFourInfoTextOne")}</p>
                            </div>
                        </div>
                        <div className={style.safariDataList}>
                            <p className={style.safariDataListTitle}>{t("safaris.safariFourListTitle")}</p>
                            <ol className={style.safariDataListList}>
                                <li className={style.safariDataListListElement}>{t("safaris.safariFourListOne")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariFourListTwo")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariFourListThree")}</li>
                                <li className={style.safariDataListListElement}>{t("safaris.safariFourListFour")}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
