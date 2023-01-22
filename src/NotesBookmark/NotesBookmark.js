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
    const [bookmarkArr, setBookmarkArr] = useState(getLocalItems() || []);

    function createBookmark(bookmark){
        return <Bookmarks text={bookmark.text} time={bookmark.time} />
    }
    return (
        <div className={styles.bookmark}>
        <div className={styles.bookmarkList}>
        {bookmarkArr.map(createBookmark)}
        </div>
        <InputBookmarks bookmarkArr={bookmarkArr} setBookmarkArr={setBookmarkArr} />
        </div>
    );
}