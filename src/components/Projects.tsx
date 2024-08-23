const Projects: React.FC = () => {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Projetos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Food-Flow</h3>
            <p className="mt-2 text-gray-600">Plataforma de comércio digital para controlador de finanças.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Ver Projeto</button>
          </div>

        </div>
      </section>
    );
  };
  
  export default Projects;
  