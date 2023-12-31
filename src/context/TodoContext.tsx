import React, { createContext } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'usehooks-ts';

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  updateTodoStatus: (id: string) => void;
  deleteCompletedTodos: (ids: Todo[]) => void;
}

export interface Todo {
  id: string;
  text: string;
  status: 'undone' | 'completed';
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  // ::: ADD NEW TODO :::
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    };

    setTodos([...todos, newTodo]);
  };

  // ::: DELETE A TODO :::
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // ::: DELETE COMPLETED TODOS :::
  const deleteCompletedTodos = (ids: Todo[]) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => !ids.includes(todo));
    });
  };

  // ::: EDIT A TODO :::
  const editTodo = (id: string, text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      });
    });
  };

  // ::: UPDATE A TODO :::
  const updateTodoStatus = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone',
          };
        }
        return todo;
      });
    });
  };

  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
    deleteCompletedTodos,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};
