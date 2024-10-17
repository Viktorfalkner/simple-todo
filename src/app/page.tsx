import Image from "next/image";
import TitleBackground from "./components/Layout/TitleBackground";
import Footer from "./components/Layout/Footer";
import MainHeader from "./components/Header/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/List/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4B3F1] min-h-screen">
      <TitleBackground />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <MainHeader />
        <TodoList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}
