import { ChangeEvent, FormEvent, useState } from 'react';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './components/Tasklist';
import { Guid } from 'guid-typescript'

type TaskToDo = {
  id: string;
  task: string;
  finished?: boolean;
}


export function App() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState<TaskToDo[]>([]);

  function handleNewTask(event: FormEvent) {
    const newTask = {
      id: Guid.create().toString(),
      task: newTaskText
    } as TaskToDo;

    setTasks([...tasks, newTask]);
    event.preventDefault();
    setNewTaskText('');
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form onSubmit={handleNewTask} className={styles.addTaskForm}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setNewTaskText(event.target.value);                          
            }}
            value={newTaskText}
          />
          <button type='submit' disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}