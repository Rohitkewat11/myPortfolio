import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export function Contect(){
    return(
        <>
        <div className="text-white md:flex md:justify-around bg-cyan-900 mt-10 p-10">
            <div>
                <p className="text-4xl font-bold">Contect</p>
                <p className="text-3xl font-semibold">Feel free to reach out!</p>
            </div>
            <div className="text-xl">
            <div className="flex items-center mt-3">
                <IoMdMail/>&nbsp;<a href="#">directrohit.kewat@gmail.com</a>
            </div>
            <div className="flex items-center">
                <FaLinkedin/>&nbsp;<a href="https://linkedin.com/in/rohitkewat/">linkedin.com/in/rohitkewat</a>
            </div>
            <div className="flex items-center">
                <FaGithub />&nbsp;<a href="https://github.com/Rohitkewat11/">github.com/Rohitkewat11</a>
            </div>
            </div>
        </div>
        </>
    )
}