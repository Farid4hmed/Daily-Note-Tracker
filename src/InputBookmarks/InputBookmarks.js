import { useState } from "react";
import styles from "./InputBookmarks.module.css";


export default function InputBookmarks(props) {
    const [text, setText] = useState("");

    function handleSubmit() {
        const d = new Date();
        props.notesArr.push({ text: text, time: d.toLocaleString()});
        props.setNotesArr([...props.notesArr]);
        localStorage.setItem("bookmarks", JSON.stringify(props.notesArr));
        document.getElementById("inputField").value = "";
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            const d = new Date();
            props.notesArr.push({ text: text, time: d.toLocaleString() });
            props.setNotesArr([...props.notesArr]);
            localStorage.setItem("bookmarks", JSON.stringify(props.notesArr));
            document.getElementById("inputField").value = "";
        }
    }

    return (
        <div className={styles.input}>
            <input id="inputField" type="text" placeholder=" Type a daily note..." onChange={event => { setText(event.target.value) }} onKeyDown={handleEnterKey} />
            <button onClick={handleSubmit} type="submit"><div className={styles.circle}><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.39114 15.3267C2.05163 15.4625 1.7291 15.4326 1.42354 15.2371C1.11799 15.0422 0.96521 14.758 0.96521 14.3846V10.5906C0.96521 10.3529 1.03311 10.1407 1.16891 9.95401C1.30472 9.76729 1.49144 9.64846 1.7291 9.59753L9.11336 7.7642L1.7291 5.93087C1.49144 5.87994 1.30472 5.76111 1.16891 5.57438C1.03311 5.38766 0.96521 5.17546 0.96521 4.93781V1.14383C0.96521 0.770372 1.11799 0.485865 1.42354 0.29031C1.7291 0.0954333 2.05163 0.0658959 2.39114 0.201698L18.0763 6.82207C18.5007 7.0088 18.7129 7.32284 18.7129 7.7642C18.7129 8.20556 18.5007 8.5196 18.0763 8.70633L2.39114 15.3267Z" fill="white" />
            </svg>
            </div></button>
        </div>
    );
}