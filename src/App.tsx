import { Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className={"h-screen mx-20 bg-white flex flex-col"}>
      <header className={"py-8 border-b flex items-center justify-between"}>
        <h1 className={"text-10"}>HeStudy</h1>
        <div className={"text-3.5 font-bold"}>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <button className={"border border-black text-4 px-8 py-2"}>
            Let's chat
          </button>
        </div>
      </header>
      <main className={"flex-1 h-0"}>
        {useRoutes([
          {
            path: "/",
            element: <Home />,
          },
        ])}
      </main>
    </div>
  );
};

export default App;
