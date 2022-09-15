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

type TaskToDo = {
    id: string;
    task: string;
    finished?: boolean;
}
 

export function TaskList<TaskToDo>({tasks} : {tasks: TaskToDo[]}) {
    const taskCount = tasks.length;
    const pendingTasks = tasks.filter(value => { 
        return value.finished != true 
    });

    console.log(pendingTasks);

    return (
        <div className={styles.bodyTask}>
            <header className={styles.headerTasks}>
                <Score title="Tarefas criadas" color="blue" score={taskCount} />
                <Score title="Concluídas" color="purple" score={0} />
            </header>
            <main>
                <WithoutTaskView taskCount={taskCount} />
                {pendingTasks.map(task => {
                    return (
                        <Task 
                            title={task.task} 
                        />);
                })}
            </main>
        </div>
    )
}