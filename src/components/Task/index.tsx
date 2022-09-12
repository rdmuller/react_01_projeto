import styles from './Task.module.css';

interface task {
    title: string;
}

export function Task({title}:task) {
    return (
        <div className={styles.taskContent}>
            <p>{title}</p>
        </div>
    );
}