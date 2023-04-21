import '../styles/components/projectscontainer.sass'

const projects = [
  {
    id: 1,
    name: 'Quiz',
    description: 'Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.',
    img: 'IMAGEM'
  },
  {
    id: 2,
    name: 'Tabela Brasileirão',
    description: 'Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.',
    img: 'https://img.freepik.com/fotos-gratis/terra-e-galaxia-elementos-desta-imagem-fornecidos-pela-nasa_335224-750.jpg?w=2000'
  },
  { 
    id: 3, 
    name: 'Gerador de QR CODE', 
    description: 'Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.', 
    img: 'https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg' 
  },
  { 
    id: 4,
     name: 'BuscaCEP', 
     description: 'Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.', 
     img: 'IMAGEM' 
  },

]


const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="projects-card" id={proj.id} key={proj.id}>
            <h4>{proj.name}</h4>
            <div className="imagem">
              <img src={proj.img} />
            </div>
            <div className="description">
              <p>{proj.description}</p>
            </div>
            <div className="button">
              <a href="https://github.com/o-wagner" className="btn">Ver Projetos</a>
            </div>
          </div>
        ))}

      </div>

      {/* 
      <p>Saiba mais sobre o meu trabalho me seguindo nas redes sociais, e acompanhe o desenvolvimento de novos projetos 
        no meu github, clique no botão abaixo para ver meus projetos!
      </p>
      <a href="https://github.com/o-wagner" className="btn">Ver Projetos</a> */}
    </section>
  );
};

export default ProjectsContainer