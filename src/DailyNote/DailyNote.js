import styles from "./DailyNote.module.css";

export default function DailyNote(props){
    function handleClick(){
        props.notesArr.splice(props.idx, 1);
        props.setNotesArr([...props.notesArr]);
        localStorage.removeItem("notes");
        localStorage.setItem("notes", JSON.stringify(props.notesArr));
    }
    return (
        <div className={styles.container}>
         <button onClick={handleClick} className={styles.button}><img className={styles.dustbin} src={require("./dustbin.png")}></img></button>
            <p className={styles.noteStyle}>{props.text}</p>
            <p className={styles.date}>{props.time}</p>
        </div>
    );
}