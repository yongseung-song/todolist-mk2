import { Todo } from '@/types';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface TodoContext {
  todo: Todo[];
  doneTodo: Todo[];
  add: (newTodo: Todo) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  reset: () => void;
}

const initialTodo: TodoContext = {
  todo: [],
  doneTodo: [],
  add: () => {},
  toggle: () => {},
  remove: () => {},
  reset: () => {},
};

const todoContext = createContext<TodoContext>(initialTodo);

export const useTodoContext = () => useContext<TodoContext>(todoContext);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo[]>([]);
  const [doneTodo, setDoneTodo] = useState<Todo[]>([]);

  const updateTodoLists = useCallback((todos: Todo[]) => {
    setTodo(todos.filter((item) => !item.isDone));
    setDoneTodo(todos.filter((item) => item.isDone));
  }, []);

  const add = useCallback(
    (newTodo: Todo) => {
      const newTodos = [...todoItems, newTodo];
      setTodoItems(newTodos);
      updateTodoLists(newTodos);
    },
    [todoItems, updateTodoLists]
  );

  const toggle = useCallback(
    (id: string) => {
      const result = todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      setTodoItems(result);
      updateTodoLists(result);
    },
    [todoItems, updateTodoLists]
  );

  const remove = useCallback(
    (id: string) => {
      const newTodos = todoItems.filter((item) => item.id !== id);
      setTodoItems(newTodos);
      updateTodoLists(newTodos);
    },
    [todoItems, updateTodoLists]
  );

  const reset = useCallback(() => {
    setTodoItems([]);
    updateTodoLists([]);
  }, []);

  const value = { todo, doneTodo, add, toggle, remove, reset };
  return <todoContext.Provider value={value}> {children}</todoContext.Provider>;
}
