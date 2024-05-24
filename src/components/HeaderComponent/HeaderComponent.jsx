import style from "./HeaderComponent.module.css";

export default function HeaderComponent({ image, text }) {
    return (
        <section className={style.container} style={{ backgroundImage: `url(${image})` }}>
            <div className={style.overlay}>
                <p className={style.text}>{text}</p>
            </div>
        </section>
    );
}
