import { useEffect, useRef, useState } from "react";
import { useTodo } from "../hooks/useTodos";
import { Input } from ".";

export const AddToDo = () => {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    } else {
      // Error...
    }
  }

  return (
    <div className="todo todo__add">
      <div className="todo__toggle"></div>
      <form onSubmit={handleSubmission}>
        <label htmlFor="todo" className="sr-only">
          New Todo
        </label>
        <Input
          ref={inputRef}
          type='text'
          id='todo'
          name='todo'
          placeholder='Create a new todo...'
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div></div>
    </div>
  );
};
