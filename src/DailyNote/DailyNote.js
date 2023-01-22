import styles from "./DailyNote.module.css";

export default function DailyNote(props){

    return (
        <div className={styles.container}>
            <p>{props.text}</p>
            <p className={styles.date}>{props.time}</p>
        </div>
    );
}