import { useState } from 'react';
import InputBookmarks from "../../src/InputBookmarks/InputBookmarks";
import Bookmarks from "../Bookmarks/Bookmarks";
import styles from "./NotesBookmark.module.css";

export default function NotesBookmark(){
    const getLocalItems = () => {
        let list = localStorage.getItem("bookmarks");
        if(list){
            return JSON.parse(localStorage.getItem("bookmarks"));
        }
    }
    const [notesArr, setNotesArr] = useState(getLocalItems() || []);

    function createNote(note){
        return <Bookmarks text={note.text} time={note.time} />
    }
    return (
        <div className={styles.bookmark}>
        <div className={styles.bookmarkList}>
        {notesArr.map(createNote)}
        </div>
        <InputBookmarks notesArr={notesArr} setNotesArr={setNotesArr} />
        </div>
    );
}