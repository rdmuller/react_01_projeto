import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { TaskToDo } from '../Tasklist';
import { ChangeEvent } from 'react';


export function Task({task, onDelete, setStatus} : {task: TaskToDo, onDelete: Function, setStatus: Function}) {

    function handleDeleteTask() {
        onDelete(task.id);
    }

    function handleSetStatus(event: ChangeEvent<HTMLInputElement>) {
        setStatus(task.id, event.target.checked);
    }

    return (
        <div className={styles.taskContent}>
            <input 
                type="checkbox" 
                name="checkFinished" 
                id="" 
                className={styles.roundedCheckBox}
                onChange={handleSetStatus}
                checked={task.finished}
            />

            <label htmlFor="checkFinished" className={(task.finished) ? styles.taskTileFinished : styles.taskTile}>{task.task}</label>

            <button onClick={handleDeleteTask} title='Exluir tarefa'>
                <Trash size={14}/>
            </button>
        </div>
    );
}