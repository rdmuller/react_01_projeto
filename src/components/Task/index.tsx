import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface task {
    title: string;
}

export function Task({title}: task) {
    return (
        <div className={styles.taskContent}>
            <input type="checkbox" name="checkFinished" id="" className={styles.roundedCheckBox}/>
            <label htmlFor="checkFinished">{title}</label>
            <button>
                <Trash size={14}/>
            </button>
        </div>
    );
}