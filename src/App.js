// import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import { FaAlignRight } from "react-icons/fa6";
import { Hero } from "./component/hero";
import { About } from "./component/about";
import { Skill } from "./component/skills";
import { Project } from "./component/project";
import { Contect } from "./component/contect";

function App() {
  return (
    <>
      <div className="App bg-[#051637]">
        <header className="text-white text-2xl p-5 font-bold flex justify-around border-b-2">
          <div>
            <div>RK's Portfolio.</div>
          </div>
          <div className="hidden md:block lg:block">
            <div>
              <ul className="flex gap-10">
              <li>
                <a href="#about">About</a>
              </li>
              <li className="">
                <a href="#skill">Skills</a>
              </li>
              <li className=""><a href="#project">Projects</a></li>
              <li className=""><a href="#contect">Contect</a></li>
              </ul>
            </div>
          </div>
          <div className="block md:hidden lg:hidden">
            <FaAlignRight />
          </div>
        </header>

        {/* Hero Section */}
        <div>
          <Hero />
        </div>

        {/* About section  */}
        <div id="about">
          <About />
        </div>

        {/* Skill section  */}
        <div id="skill">
          <Skill />
        </div>

        {/* project Section */}
        <div id="project">
          <Project/>
        </div>
        {/* Content Section */}
        <div id="contect">
            <Contect />
        </div>
      </div>
    </>
  );
}

export default App;
