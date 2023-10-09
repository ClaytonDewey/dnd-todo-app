import { Todo } from '../context/TodoContext';
import { useTodo } from '../hooks/useTodos';
import { Button, TodoItem } from '.';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

export const TodoList = () => {
  const { todos } = useTodo();
  const [display, setDisplay] = useState<string>('all');
  const activeItemsCount = todos.filter((todo) => {
    return todo.status === 'undone';
  }).length;

  const { deleteCompletedTodos } = useTodo();

  const ids = todos.filter((todo) => {
    if (todo.status === 'completed') {
      return todo;
    }
    return null;
  });

  const handleDeleteCompleted = (ids: Todo[]) => {
    if (ids.length > 0) {
      deleteCompletedTodos(ids);
      setDisplay('all');
      toast.success('Completed todos deleted successfully!');
    } else {
      toast.error('You have not marked any tasks complete.');
    }
  };

  if (!todos.length) {
    return (
      <div className='todo__list'>
        <div className='todo todo__empty'>
          <h2>You have nothing to do!</h2>
          <blockquote>
            &ldquo;Wherever you are is the entry point.&rdquo;
            <cite>Kabir</cite>
          </blockquote>
        </div>
      </div>
    );
  }

  return (
    <div className='todo__list'>
      {display === 'all' && (
        <>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </>
      )}
      {display === 'active' && (
        <>
          {todos
            .filter((todo) => todo.status === 'undone')
            .map((todo) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </>
      )}
      {display === 'done' && (
        <>
          {todos
            .filter((todo) => todo.status === 'completed')
            .map((todo) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </>
      )}
      <footer className='todo todo__footer'>
        <span className='todo__count'>{activeItemsCount} items left</span>
        <div className='todo__toggle-container'>
          <Button
            className={`btn btn-text ${display === 'all' ? 'active' : ''}`}
            onClick={() => setDisplay('all')}>
            All
          </Button>
          <Button
            className={`btn btn-text ${display === 'active' ? 'active' : ''}`}
            onClick={() => setDisplay('active')}>
            Active
          </Button>
          <Button
            className={`btn btn-text ${display === 'done' ? 'active' : ''}`}
            onClick={() => setDisplay('done')}>
            Completed
          </Button>
        </div>
        <Button
          className='btn btn-text'
          onClick={() => handleDeleteCompleted(ids)}>
          Clear Completed
        </Button>
      </footer>
    </div>
  );
};
