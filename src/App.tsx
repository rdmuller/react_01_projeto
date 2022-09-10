import { useState } from 'react';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './components/Tasklist';

export function App() {

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form action="" className={styles.addTaskForm}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>
        <TaskList />
      </main>
    </div>
  );
}