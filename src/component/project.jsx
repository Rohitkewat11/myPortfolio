export function Project() {
  return (
    <>
      <div className="bg-[#051637]  max-h-fit shadow-lg shadow-cyan-500/100 rounded-xl text-white w-10/12 m-auto p-8 mt-10">
      <p className="text-3xl font-bold">Project</p>

       <div className="flex flex-wrap justify-around">
         {/* first */}
         <div className="h-60 w-72 rounded-lg m-2">
        <div className="group  h-52 w-80 rounded-lg[perspective:1000px]">
          <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                src="./Banaoo_technology.png"
                alt=""
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-yellow-600">
                <a href="https://banao-technology-project-frontend.vercel.app/">
                  &lt;Show demo/&gt;
                </a>
              </button>
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-green-600">
                <a href="https://github.com/Rohitkewat11/BanaoTechnologyProjectFrontend">
                  &lt;Show code/&gt;
                </a>
              </button>
            </div>
          </div>
          <div className="text-white mt-2">
            <p>
              This is a assessment project, based on MERN with CURD oprations.
            </p>
          </div>
        </div>
        </div>
        {/* second */}
        <div className="h-60 w-80 rounded-lg m-2">
        <div className="group  h-52 w-80 rounded-lg[perspective:1000px]">
          <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                src="./the_green_chilli.png"
                alt=""
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-yellow-600">
                <a href="https://advisoropediafrontend.onrender.com">
                  &lt;Show demo/&gt;
                </a>
              </button>
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-green-600">
                <a href="https://github.com/Rohitkewat11/advisoropediaFrontend">
                  &lt;Show code/&gt;
                </a>
              </button>
            </div>
          </div>
          <div className="text-white mt-2">
            <p>
              This is a assessment project, food menu app.
            </p>
          </div>
        </div>
        </div>
        </div>
       <div className="flex flex-wrap justify-around mt-5">
         {/* third */}
         <div className="h-60 w-80 rounded-lg m-2">
        <div className="group  h-52 w-80 rounded-lg[perspective:1000px]">
          <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                src="./Makerble.png"
                alt=""
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-yellow-600">
                <a href="https://makerble-assignment.vercel.app/">
                  &lt;Show demo/&gt;
                </a>
              </button>
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-green-600">
                <a href="https://github.com/Rohitkewat11/MakerbleAssignment">
                  &lt;Show code/&gt;
                </a>
              </button>
            </div>
          </div>
          <div className="text-white mt-2">
            <p>
              This is a assessment project, landing page.
            </p>
          </div>
        </div>
        </div>
        {/* fourth */}
        <div className="h-60 w-80 rounded-lg m-2">
        <div className="group  h-52 w-80 rounded-lg[perspective:1000px]">
          <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                src="./QuadBtech.png"
                alt=""
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-yellow-600">
                <a href="https://quad-b-tech-to-do.vercel.app/">
                  &lt;Show demo/&gt;
                </a>
              </button>
              <button className="p-2 w-52 m-auto rounded-md font-semibold bg-black/100 text-green-600">
                <a href="https://github.com/Rohitkewat11/QuadBTechToDo">
                  &lt;Show code/&gt;
                </a>
              </button>
            </div>
          </div>
          <div className="text-white mt-2">
            <p>
              This is a assessment project, ToDo App.
            </p>
          </div>
        </div>
        </div>
       </div>
      </div>
    </>
  );
}
