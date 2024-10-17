import React from "react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Sidebar() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#f3f9ff] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />

      <div className="mt-auto flex flex-col gap-2">
        {isAuthenticated ? (
          <LogoutLink>
            <Button buttonType="secondary">Logout</Button>
          </LogoutLink>
        ) : (
          <>
            <LoginLink>
              <Button buttonType="secondary">Login</Button>
            </LoginLink>
            <RegisterLink>
              <Button buttonType="secondary">Register</Button>
            </RegisterLink>
          </>
        )}
      </div>
    </section>
  );
}

export default Sidebar;
