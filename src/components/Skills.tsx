import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

const Skills: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Habilidades Técnicas</h2>
      <div className="flex justify-center gap-6"> {/* Ajuste aqui */}
        <a><FaHtml5 size={80} /></a>
        <a><FaCss3Alt size={80}/></a>
        <a><IoLogoJavascript size={80}/> </a>
        <a><FaReact  size={80} /></a>
        <a><FaNode  size={80}/></a>
        <a><SiTypescript size={80}/></a>
        <a><TbFileTypeSql size={80}/> </a>
      </div>
    </section>
  );
};

export default Skills;

