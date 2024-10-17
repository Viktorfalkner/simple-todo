import { createContext, useState, useEffect } from "react";
import { Todo } from "../lib/types";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

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
  const { isAuthenticated } = useKindeBrowserClient();

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      let parsedTodos = JSON.parse(savedTodos);
      return parsedTodos;
    } else {
      return [];
    }
  });

  // Derived State
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
