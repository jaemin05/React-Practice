import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <div style={{width:'100vw',height:'100vh',display : 'flex',justifyContent:'center',alignItems:"center"}}>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      </div>
    </TodoProvider>
  );
}

export default App;
