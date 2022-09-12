import { Score } from '../Score';
import styles from './TaskList.module.css';
import clipboard from '../../assets/clipboard.svg';
import { Task } from '../Task';

function WithoutTaskView() {
    if (2 === 1) {
        return (
            <div className={styles.noTask}>
                <img src={clipboard} />
                <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        );
    }
    else {
        return <></>;
    }
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
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
                <Task title='O Fabuloso Gerador de Lero-lero v2.0 é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado' />
            </main>
        </div>
    )
}