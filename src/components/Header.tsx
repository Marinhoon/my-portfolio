const Header: React.FC = () => {
  return (
    <header className="text-center py-10">
      <img
        src="https://avatars.githubusercontent.com/u/145589161?s=96&v=4"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h1 className="text-4xl font-bold mt-4">Vitor Marinho</h1>
      <p className="text-xl text-gray-600">Desenvolvedor Front-End</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Quem Sou</h2>
          <p className="text-gray-700">
            Olá, me chamo Vitor, tenho 25 anos, sou de Salvador-BA. Sou um jovem desenvolvedor
            que trilha seu caminho na programação com uma determinação notável.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Família</h2>
          <p className="text-gray-700">
            Casado e pai dedicado de João Miguel, encontrei no mundo da
            tecnologia não apenas uma carreira, mas uma paixão que alimenta
            diariamente.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Minha Jornada</h2>
          <p className="text-gray-700">
            Comecei minha jornada na programação há nove meses, decidindo
            aprender os fundamentos da web. Iniciei meus estudos com HTML, CSS e
            JavaScript, e logo estava imerso no universo do React com
            TypeScript.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Motivação</h2>
          <p className="text-gray-700">
            Motivado pelo desejo de proporcionar uma vida melhor para minha
            família e ser um exemplo para meu filho, encaro cada desafio como
            uma oportunidade de crescimento. Meu sonho é conquistar um bom
            emprego na área da programação.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Compromisso</h2>
          <p className="text-gray-700">
            Meu compromisso com o aprendizado e minha determinação são reflexos
            do amor que sinto por minha família e do desejo de construir um
            futuro sólido e promissor.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

