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
import Hero from "./components/Hero";
import Try from "./components/Try";

function App() {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="flex flex-shrink-0 w-screen h-screen">
        <Sidebar />

        <div className=" flex flex-col w-[100%] pl-[15%] pr-[5%]">
          <Main1 />
          <Whatca />
          <Whyca />
          <Respo />
          <Brown />
          <Contact />
        </div>
        <Side />
      </div>

      {/* <div className="w-screen h-screen bg-green-400 snap-start"></div>
      <div className="w-screen h-screen bg-green-600 snap-start"></div>
      <div className="w-screen h-screen bg-green-800 snap-start"></div> */}
    </div>
  );
}

export default App;
