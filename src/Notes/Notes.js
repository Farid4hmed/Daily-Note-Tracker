import { useState } from 'react';
import Input from "../../src/Input/Input";
import DailyNote from "../DailyNote/DailyNote";
import styles from "./Notes.module.css";

export default function Notes(){
    const getLocalItems = () => {
        let list = localStorage.getItem("notes");
        if(list){
            return JSON.parse(localStorage.getItem("notes"));
        }
    }
    const [notesArr, setNotesArr] = useState(getLocalItems() || []);

    function createNote(note){
        var idx = notesArr.indexOf(note);
        return <DailyNote text={note.text} time={note.time} setNotesArr={setNotesArr} notesArr={notesArr} idx={idx}/>
    }
    return (
        <div className={styles.notes}>
        <div className={styles.dailyNotes}>
        {notesArr.map(createNote)}
        </div>
        <Input notesArr={notesArr} setNotesArr={setNotesArr} />
        </div>
    );
}