import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main1 from "./components/Main1";
import Side from "./components/Side";
import Whatca from "./components/Whatca";
import Whyca from "./components/Whyca";
import Respo from "./components/Respo";
import Brown from "./components/Brown";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col w-[100%] pl-[15%] pr-[5%]">
          <Main1 />
          <Whatca />
          <Whyca />
          <Respo />
          <Brown />
          <Contact />
        </div>
        <Side />
      </div>
    </div>
  );
}

export default App;
