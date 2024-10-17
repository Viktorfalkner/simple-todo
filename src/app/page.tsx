"use client";

import TodoContextProvider from "./contexts/TodoContextProvider";
import Root from "./components/Root";

export default function Home() {
  return (
    <TodoContextProvider>
      <Root />
    </TodoContextProvider>
  );
}
