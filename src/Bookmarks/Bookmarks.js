import styles from "./Bookmarks.module.css";

export default function Bookmarks(props){
    const link = `https://${props.text}`;
    return (
        <div className={styles.container}>
            <a href={link} target="_blank">{props.text}</a>
            <p className={styles.date}>{props.time}</p>
        </div>
    );
}