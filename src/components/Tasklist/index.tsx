import { Score } from '../Score';
import styles from './TaskList.module.css';
import clipboard from '../../assets/clipboard.svg';
import { Task } from '../Task';

function WithoutTaskView({taskCount} : {taskCount: number}) {
    if (taskCount === 0) {
        return (
            <div className={styles.noTask}>
                <img src={clipboard} />
                <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        );
    }
    else return <></>;
}

export type TaskToDo = {
    id: string;
    task: string;
    finished?: boolean;
}
 
export function TaskList({tasks, onDeleteTask, setTaskStatus} : {tasks: TaskToDo[], onDeleteTask: Function, setTaskStatus: Function}) {    
    const taskCount = tasks.length;

    // sei que a linha abaixo poderia ser pendingTasks.length, o reduce foi para praticar
    const taskFinishedCount = tasks.reduce((sum, task) => sum + (task.finished ? 1 : 0), 0);

    const pendingTasks = tasks.filter(value => { 
        return value.finished != true 
    });

    const finishedTasks = tasks.filter(value => { 
        return value.finished === true 
    });

    return (
        <div className={styles.bodyTask}>
            <header className={styles.headerTasks}>
                <Score title="Tarefas criadas" color="blue" score={taskCount} />
                <Score title="Concluídas" color="purple" score={taskFinishedCount} />
            </header>
            <main>
                <WithoutTaskView taskCount={taskCount} />
                {pendingTasks.map(task => {
                    return (
                        <Task 
                            key={task.id}
                            task={task} 
                            onDelete={onDeleteTask}
                            setStatus={setTaskStatus}
                        />);
                })}

                {finishedTasks.map(task => {
                    return (
                        <Task 
                            key={task.id}
                            task={task} 
                            onDelete={onDeleteTask}
                            setStatus={setTaskStatus}
                        />);
                })}
            </main>
        </div>
    )
}