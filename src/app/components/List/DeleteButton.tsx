import React from "react";

type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

function DeleteButton({ id, handleDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
