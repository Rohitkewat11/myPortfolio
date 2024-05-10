import { ReactTyped } from "react-typed";

export function Hero() {
  return (
    <>
      <div className="w-96 m-auto  md:w-full md:flex md:items-center md:justify-around font-mono h-screen p-1">
        <div>
          <div>
            <p className="text-white font-bold text-4xl md:text-5xl">
              Hi, I'm Rohit
            </p>
            <p className="text-white font-bold text-2xl md:text-4xl mt-3">
              And I'm a&nbsp;
              <ReactTyped
                className="text-xl md:text-3xl text-[#34d5f9]"
                strings={["Web Developer", "Frontend Developer","Fullstack Developer"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></ReactTyped>
            </p>
            <p className="w-96 text-white mt-2">
              Seeking an entry-level position to leverage my enthusiasm,
              creativity, and dedication for driving organizational growth and
              achieving professional development.
            </p>
            <button type="button" className=" hover:scale-90 ease-in-out duration-300 text-white bg-[#ee611f] shadow-lg shadow-cyan-500/50 p-2 text-xl rounded-md font-bold mt-3">
                <a href="./Rohit_CV.pdf" download>
              Download CV
                </a>
            </button>
          </div>
        </div>
        <div>
          <img
            src="./img.avif"
            alt="pic"
            className="h-72 w-72 md:h-96 md:w-96 rounded-full border border-white mt-5"
          />
        </div>
      </div>
    </>
  );
}
