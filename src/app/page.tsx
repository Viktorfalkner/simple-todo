import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4B3F1] min-h-screen">
      <h1 className="text-[120px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2em]">
        TodoApp
      </h1>
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2] bg-[#edf3fb] border-b border-black/[0.08]"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#f3f9ff] border-l border-black/[0.08]"></section>
      </main>
      <footer className="flex justify-between w-[972px] items-center text-[11px] opacity-90 mt-[12px]">
        <small className="text-[11px]">&copy; 2024. Copyright by VikAF</small>
        <p>
          Version <b>1.0</b>
        </p>
      </footer>
    </div>
  );
}
