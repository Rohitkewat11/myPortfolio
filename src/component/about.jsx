export function About() {
  return (
    <>
      <div
        id="About"
        className="bg-[#051637] shadow-lg shadow-cyan-500/100 rounded-xl text-white w-10/12 m-auto p-5"
      >
        <div id="aboutMe">
          <p id="about" className="text-3xl font-bold">
            About
          </p>
          <blockquote className="text-xl text-justify mt-3">
          Aspirant Web Developer skilled in creating Responsive & Interactive websites | Proficient in CSS3, HTML5, Bootstrap, JavaScript, and JQuery
           (Ajax and Dynamic UI),TailwindCSS, ReactJS, Redux | Knowledgeable in Node JS, Express JS, and MongoDB for BackEnd Development.
          </blockquote>
        </div>

        <div id="Education">
          <p id="education" className="text-2xl font-semibold mt-3">
            Education :-
          </p>
          <div
            id="education_details"
            className="flex flex-wrap md:flex-nowrap md:justify-around gap-1 text-xl"
          >
            <div>
              <div>
                <h3 className="underline">
                  Master Of Computer Application(MCA)
                </h3>
                <p>
                  University :- RAJIV GANDHI PROUDYUGIKI VISWAVIDYALAYA, BHOPAL
                  <br /> Address :- Bhopal M.P. 462-033
                </p>
              </div>
              <div className="mt-3">
                <h3 className="underline">
                  Bachelor Of Computer Application(BCA)
                </h3>
                <p>
                  University :- MAKHANLAL CHATURVEDI NATIONAL UNIVERSITY OF
                  <br /> JOURNALISM AND COMMUNICATION, BHOPAL <br /> Address :-
                  Bhopal M.P. 462-033
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="underline">
                  Higher Secondary School Certificate(12<sup>th</sup>)
                </h3>
                <p>
                  Board :- BOARD OF SECONDARY EDUCATION, BHOPAL <br /> Address
                  :- Bhopal M.P. 462-033
                </p>
              </div>
              <div className="mt-3">
                <h3 className="underline">
                  High Secondary School Certificate(10<sup>th</sup>)
                </h3>
                <p>
                  Board :- BOARD OF SECONDARY EDUCATION, BHOPAL <br /> Address
                  :- Bhopal M.P. 462-033
                </p>
              </div>
            </div>
          </div>
          <div id="Certification">
            <p id="certification" className="text-2xl font-semibold mt-3">
              Certification :-
            </p>
            <div className="ms-[2%] text-xl mt-2">
              <div>
                <h4 className="underline">Full Stack Web Development With React JS</h4>
                <p>
                  Institute :- NARESH I TECHNOLOGIES
                  <br />
                  Address :- Ameerpet, Hyderabad,Telagana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
