import { ChangeEvent, FormEvent, useState } from 'react';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { TaskList, TaskToDo } from './components/Tasklist';
import { Guid } from 'guid-typescript';

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

  function deleteTask (idToDelete: string) {
    const newTaskList = tasks.filter(task => {
      return task.id != idToDelete
    });

    setTasks(newTaskList)
  }

  function setTaskStatus(id: string, status: boolean) {
    const newTaskList = tasks.map((task => {
      if (task.id === id) {
        task.finished = status;
      }
      
      return task;
    }));

    setTasks(newTaskList);
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
        <TaskList tasks={tasks} onDeleteTask={deleteTask} setTaskStatus={setTaskStatus} />
      </main>
    </div>
  );
}