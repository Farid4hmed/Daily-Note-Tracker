import styles from "./Bookmarks.module.css";

export default function Bookmarks(props){
    var link;
    if(props.text.substring(0, 8) === "https://"){link = props.text;}
    else {link = `https://${props.text}`;}

    function handleClick(){
        props.bookmarkArr.splice(props.idx, 1);
        props.setBookmarkArr([...props.bookmarkArr]);
        localStorage.removeItem("bookmarks");
        localStorage.setItem("bookmarks", JSON.stringify(props.bookmarkArr));
    }
    return (
        <div className={styles.container}>
        <button onClick={handleClick} className={styles.button}><img className={styles.dustbin} src={require("./dustbin.png")}></img></button>
            <a className={styles.link}href={link} rel="noreferrer" target="_blank">{props.text}</a>
            <p className={styles.date}>{props.time}</p>
            
        </div>
    );
}