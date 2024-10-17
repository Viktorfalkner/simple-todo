import { createContext, useState } from "react";
import { Todo } from "../lib/types";

type TodoContextType = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

type TodosContextProviderProps = {
  children: React.ReactNode;
};

const TodoContextProvider: React.FC<TodosContextProviderProps> = ({
  children,
}: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Derived State
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("login to add more than 3 todos");
      return;
    } else if (todoText != "") {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
