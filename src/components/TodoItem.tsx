import type { Todo } from '../context/TodoContext';
import { useEffect, useRef, useState } from 'react';
import { useTodo } from '../hooks/useTodos';
import { Input, Button } from '.';
import { toast } from 'react-hot-toast';
import { IconCross } from '../icons';

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [editingTodoText, setEditingTodoText] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo();

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== '') {
      editTodo(todoId, editingTodoText);
      setEditingTodoId(null);
      setEditingTodoText('');
      toast.success('Todo updated successfully!');
    } else {
      toast.error('Todo field cannot be empty!');
    }
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success('Todo deleted successfully!');
  };

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId);
    toast.success('Todo status updated successfully!');
  };

  return (
    <>
      {editingTodoId === todo.id ? (
        <>
          <div className='todo'>
            <Button
              onClick={() => handleStatusUpdate(todo.id)}
              className={`todo__toggle ${
                todo.status === 'undone' ? '' : 'done'
              }`}>
              {todo.status === 'undone' ? (
                <span className='sr-only'>mark completed</span>
              ) : (
                <span className='sr-only'>mark undone</span>
              )}
            </Button>
            <form onSubmit={() => handleUpdate(todo.id)}>
              <label htmlFor='todo' className='sr-only'>
                Edit Todo
              </label>
              <Input
                ref={editInputRef}
                type='text'
                value={editingTodoText}
                onChange={(e) => setEditingTodoText(e.target.value)}
              />
            </form>
            <div></div>
          </div>
        </>
      ) : (
        <div className='todo'>
          <Button
            onClick={() => handleStatusUpdate(todo.id)}
            className={`todo__toggle ${
              todo.status === 'undone' ? '' : 'done'
            }`}>
            {todo.status === 'undone' ? (
              <span className='sr-only'>mark completed</span>
            ) : (
              <span className='sr-only'>mark undone</span>
            )}
          </Button>
          <div>
            <p
              onClick={() => handleEdit(todo.id, todo.text)}
              style={{
                textDecoration:
                  todo.status === 'completed' ? 'line-through' : 'none',
              }}>
              {todo.text}
            </p>
            {/* <button onClick={() => handleEdit(todo.id, todo.text)}>
              <FaRegEdit />
              Edit
            </button> */}
          </div>
          <Button onClick={() => handleDelete(todo.id)} className='btn btn-del'>
            <IconCross />
            <span className='sr-only'>Delete Todo</span>
          </Button>
        </div>
      )}
    </>
  );
};
