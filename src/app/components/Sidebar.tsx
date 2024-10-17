import React from "react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

function Sidebar() {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#f3f9ff] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />

      <div className="mt-auto flex flex-col gap-2">
        <Button buttonType="secondary">Login</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}

export default Sidebar;
