export function Project() {
  return (
    <>
      <div className="bg-[#051637] shadow-lg shadow-cyan-500/100 rounded-xl text-white w-10/12 m-auto p-5 mt-10">
        <p className="text-3xl font-bold">Project</p>

        <div className="flex flex-wrap justify-around mb-1">
          {/* first */}
          <div className="h-[15rem] w-[20rem] rounded-lg mt-2">
            <div className="group h-full w-full rounded-lg[perspective:1000px]">
              <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                    src="./Banaoo_technology.png"
                    alt=""
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="p-2">
                  This is a assessment project, based on MERN with CURD
                  oprations.
                </p>
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
            </div>
          </div>
          {/* second */}
          <div className="h-[15rem] w-[20rem] rounded-lg mt-2">
            <div className="group  h-full w-full rounded-lg[perspective:1000px]">
              <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                    src="./the_green_chilli.png"
                    alt=""
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="p-2">This is a assessment project, food menu app.</p>
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
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-1">
          {/* third */}
          <div className="h-[15rem] w-[20rem] rounded-lg mt-2">
            <div className="group  h-full w-full rounded-lg[perspective:1000px]">
              <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                    src="./Makerble.png"
                    alt=""
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="p-2">This is a assessment project, landing page.</p>
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
            </div>
          </div>
          {/* fourth */}
          <div className="h-[15rem] w-[20rem] rounded-lg mt-2">
            <div className="group  h-full w-full rounded-lg[perspective:1000px]">
              <div className="reletive h-full w-full rounded-xl shadow-xl transition-all ease-linear duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl shadow-xl shadow-black/80"
                    src="./QuadBtech.png"
                    alt=""
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 h-full w-full rounded-xl text-white bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="p-2">This is a assessment project, ToDo App.</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
