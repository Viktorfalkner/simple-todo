import React, { useContext, useState } from "react";
import Button from "./Button";
import { useTodoContext } from "@/app/lib/hooks";

function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodoContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleAddTodo(todoText);

        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]"> Add a Todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button> Add To List</Button>
    </form>
  );
}

export default AddTodoForm;
