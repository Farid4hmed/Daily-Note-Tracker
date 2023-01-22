import styles from "./Bookmarks.module.css";

export default function Bookmarks(props){
    return (
        <div className={styles.container}>
            <p>{props.text}</p>
            <p className={styles.date}>{props.time}</p>
        </div>
    );
}