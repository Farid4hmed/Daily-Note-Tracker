import Input from "../../src/Input/Input";
import styles from "./Notes.module.css";

export default function Notes(){
    return (
        <div className={styles.notes}>
            <Input />
        </div>
    );
}