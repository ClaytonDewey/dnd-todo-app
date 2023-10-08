import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/josefin-sans';
import App from './App.tsx';
import { TodoProvider } from './context/TodoContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
