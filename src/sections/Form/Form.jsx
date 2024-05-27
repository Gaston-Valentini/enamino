import style from "./Form.module.css";
import { useTranslation } from "react-i18next";
import { MdAlternateEmail } from "react-icons/md";
import { FaUser, FaMessage } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Form() {
    const [t, i18n] = useTranslation("global");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [canSubmit, setCanSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        setCanSubmit(Object.values(form).every((value) => value !== ""));
    }, [form]);

    return (
        <section className={style.container}>
            <p className={style.text}>{t("contact.text")}</p>
            <form className={style.form}>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <FaUser />
                    </div>
                    <input type="text" name="name" placeholder={t("contact.name")} className={style.formSectionInput} onChange={(e) => handleChange(e)} />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <MdAlternateEmail />
                    </div>
                    <input type="email" name="email" placeholder={t("contact.email")} className={style.formSectionInput} onChange={(e) => handleChange(e)} />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <FaMessage />
                    </div>
                    <textarea name="message" placeholder={t("contact.message")} className={style.formSectionInput} onChange={(e) => handleChange(e)} />
                </div>
                <input type="submit" value={t("contact.send")} disabled={!canSubmit} className={style.formSubmit} />
            </form>
        </section>
    );
}
