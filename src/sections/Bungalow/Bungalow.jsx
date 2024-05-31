import style from "./Bungalow.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import bungalowOne from "../../assets/images/bungalow-1.jpg";
import BungalowTwo from "../../assets/images/bungalow-2.jpg";
import BungalowThree from "../../assets/images/bungalow-3.jpg";
import bungalowFour from "../../assets/images/bungalow-4.jpg";
import BungalowFive from "../../assets/images/bungalow-5.jpg";
import BungalowSix from "../../assets/images/bungalow-6.jpg";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";

export default function Bungalow() {
    const [t, i18n] = useTranslation("global");
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [carouselIndex, setCarouselIndex] = useState(1);
    const images = Array.from(document.querySelectorAll(".bungalowsCarouselImage"));

    const onNext = () => {
        switch (carouselIndex) {
            case 1:
                images.map((e) => {
                    e.style.transform = "translateX(-100%)";
                });
                setCarouselIndex(2);
                break;
            case 2:
                images.map((e) => {
                    e.style.transform = "translateX(-200%)";
                });
                setCarouselIndex(3);
                break;

            case 3:
                images.map((e) => {
                    e.style.transform = "translateX(-300%)";
                });
                setCarouselIndex(4);
                break;

            case 4:
                images.map((e) => {
                    e.style.transform = "translateX(-400%)";
                });
                setCarouselIndex(5);
                break;

            case 5:
                images.map((e) => {
                    e.style.transform = "translateX(-500%)";
                });
                setCarouselIndex(6);
                break;

            case 6:
                images.map((e) => {
                    e.style.transform = "translateX(0)";
                });
                setCarouselIndex(1);
                break;

            default:
                break;
        }
    };

    const onPrev = () => {
        switch (carouselIndex) {
            case 1:
                images.map((e) => {
                    e.style.transform = "translateX(-500%)";
                });
                setCarouselIndex(6);
                break;
            case 2:
                images.map((e) => {
                    e.style.transform = "translateX(0)";
                });
                setCarouselIndex(1);
                break;

            case 3:
                images.map((e) => {
                    e.style.transform = "translateX(-100%)";
                });
                setCarouselIndex(2);
                break;

            case 4:
                images.map((e) => {
                    e.style.transform = "translateX(-200%)";
                });
                setCarouselIndex(3);
                break;

            case 5:
                images.map((e) => {
                    e.style.transform = "translateX(-300%)";
                });
                setCarouselIndex(4);
                break;

            case 6:
                images.map((e) => {
                    e.style.transform = "translateX(-400%)";
                });
                setCarouselIndex(5);
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });
    }, []);

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>{t("bungalow.title")}</p>
                <p className={style.headingText}>{t("bungalow.subtitle")}</p>
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
            {innerWidth > 767 ? (
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
                    <div className={style.imagesImage}>
                        <img src={bungalowFour} />
                    </div>
                    <div className={style.imagesImage}>
                        <img src={BungalowFive} />
                    </div>
                    <div className={style.imagesImage}>
                        <img src={BungalowSix} />
                    </div>
                </div>
            ) : (
                <div className={style.imagesCarousel}>
                    <div className={style.imagesCarouselBig}>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={bungalowOne} />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowTwo} />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowThree} />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={bungalowFour} />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowFive} />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowSix} />
                        </div>
                    </div>
                    <div className={style.imagesCarouselNavbar}>
                        <IoArrowBackCircleSharp onClick={onPrev} />
                        <IoArrowForwardCircleSharp onClick={onNext} />
                    </div>
                </div>
            )}
            <p className={style.text}>{t("bungalow.text")}</p>
        </section>
    );
}
