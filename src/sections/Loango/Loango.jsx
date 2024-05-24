import style from "./Loango.module.css";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/loango-1.jpg";
import image2 from "../../assets/images/loango-2.jpg";
import image3 from "../../assets/images/loango-3.jpg";
import image4 from "../../assets/images/loango-4.jpg";

export default function Loango() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.content}>
                <p className={style.title}>{t("loango.title")}</p>
                <div className={style.blocks}>
                    <div className={style.blocksBlock}>
                        <p className={style.blocksBlockText}>{t("loango.blockOne")}</p>
                        <div className={style.blocksBlockImage}>
                            <img src={image1} />
                        </div>
                    </div>
                    <div className={style.blocksBlock}>
                        <div className={style.blocksBlockImage}>
                            <img src={image2} />
                        </div>
                        <p className={style.blocksBlockText}>{t("loango.blockTwo")}</p>
                    </div>
                    <div className={style.blocksBlock}>
                        <p className={style.blocksBlockText}>{t("loango.blockThree")}</p>
                        <div className={style.blocksBlockImage}>
                            <img src={image3} />
                        </div>
                    </div>
                    <div className={style.blocksBlock}>
                        <div className={style.blocksBlockImage}>
                            <img src={image4} />
                        </div>
                        <p className={style.blocksBlockText}>{t("loango.blockFour")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
