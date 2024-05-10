import { FaAlignRight } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { Hero } from "./component/hero";
import { About } from "./component/about";
import { Skill } from "./component/skills";
import { Project } from "./component/project";
import { Contect } from "./component/contect";
import { useState } from "react";

function App() {

  const [active,setActive] = useState(true);

  return (
    <>
      <div className="App bg-[#051637]">
        <header className="text-white text-2xl p-5 font-bold flex justify-between md:justify-around border-b-2">
          <div>
            <div>RK's Portfolio.</div>
          </div>
          <div className="md:block lg:block">
            <div>
              <ul className={active?"md:flex md:gap-10 hidden md:static md:p-0 absolute top-20 right-1 rounded-lg bg-[#051637] p-5":"md:flex md:gap-10 md:static block md:p-0 absolute top-20 right-1 rounded-lg bg-[#051637] p-5"}>
                <li>
                  <a href="#about" onClick={()=>{setActive(active=>!active)}}>About</a>
                </li>
                <li className="">
                  <a href="#skill" onClick={()=>{setActive(active=>!active)}}>Skills</a>
                </li>
                <li className="">
                  <a href="#project" onClick={()=>{setActive(active=>!active)}}>Projects</a>
                </li>
                <li className="">
                  <a href="#contect" onClick={()=>{setActive(active=>!active)}}>Contect</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="block md:hidden lg:hidden">
            {active?
            <FaAlignRight className="cursor-pointer" onClick={()=>{setActive(active=>!active)}}/>:
            <GiCrossMark  className="cursor-pointer" onClick={()=>{setActive(active=>!active)}}/>
            }
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
          <Project />
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
