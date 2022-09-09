import { useState } from 'react';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';

export function App() {

  return (
    <div>
      <Header />
      <div>
        <form action="">
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <div>
            <p>Criar</p>
          </div>
        </form>
      </div>
    </div>
  );
}