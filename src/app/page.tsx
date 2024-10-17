"use client";

import TodoContextProvider from "./contexts/TodoContextProvider";
import Root from "./components/Root";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TodoContextProvider>
      <Root />
    </TodoContextProvider>
  );
}
