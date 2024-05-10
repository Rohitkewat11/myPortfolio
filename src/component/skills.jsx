export function Skill() {
  return (
    <>
      <div className="bg-[#051637] shadow-lg shadow-cyan-500/100 rounded-xl text-white w-10/12 m-auto p-5 mt-10">
        <p className="text-3xl font-bold">Skills</p>

        <div className="flex justify-around flex-wrap gap-2 mt-3">
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./html.png"  className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">Html5</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./css3.png" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">Css3</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./js.svg" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">JavaScript</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./jquery.webp" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">JQuery</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./bootstrap.svg" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">Bootstrap</p>
          </div>
        </div>
        <div className="flex justify-around flex-wrap mt-5">
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./tailwind.svg" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">Tailwind</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./logo192.png" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">React</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./redux.png" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">Redux</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./nodejs.svg" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">NodeJS</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer">
              <img src="./mongodb.svg" className="hover:scale-150 ease-in duration-700" alt="" height={50} width={50} />
            </div>
            <p className="text-center font-semibold">MongoDB</p>
          </div>
        </div>
      </div>
    </>
  );
}
