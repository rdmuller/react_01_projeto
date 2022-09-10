import { Score } from '../Score';
import styles from './TaskList.module.css';
import clipboard from '../../assets/clipboard.svg';

function WithoutTaskView() {
    return (
        <div className={styles.noTask}>
            <img src={clipboard} />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}

export function TaskList() {
    return (
        <div className={styles.bodyTask}>
            <header className={styles.headerTasks}>
                <Score title="Tarefas criadas" color="blue" score={0} />
                <Score title="Concluídas" color="purple" score={0} />
            </header>
            <main>
                <WithoutTaskView />
            </main>
        </div>
    )
}