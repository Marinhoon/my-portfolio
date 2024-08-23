import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Contatos</h2>
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://www.linkedin.com/in/vitor-marinho-a3a177297/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/marinhoon" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:email@example.com">
          <FaEnvelope size={24} />
        </a>
      </div>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Baixar CV</button>
    </section>
  );
};

export default Contact;
