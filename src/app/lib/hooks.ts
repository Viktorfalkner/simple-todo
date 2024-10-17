import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";
import { Todo } from "./types";

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("Forgot to add Provider!")
    }
    return context;
}


export function useLocalStorage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log("TODOS ARE HERE", savedTodos)
      const parsedTodos = JSON.parse(savedTodos);
      console.log("PARSED ARE HERE", parsedTodos)

      setTodos(parsedTodos);
      console.log("TODOS ARE now set to", todos)

    } else {
      console.log("Nothing in here")
    }
  }, []);

  useEffect(() => {
    console.log("2nd one running")
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    setTodos
  }
}
