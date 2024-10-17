import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("Forgot to add Provider!")
    }
    return context;
}