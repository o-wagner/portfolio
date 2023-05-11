import '../styles/components/projectscontainer.sass';
import quiz from '../img/projects/quiz.png';
import buscacep from '../img/projects/buscacep.png';
import brasileirao from '../img/projects/brasileirao.png'
import qrcode from '../img/projects/qrcode.png';
import myservices from '../img/projects/myservices.jpg'; 
const projects = [
  {
    id: 1,
    name: 'Quiz React',
    description: 'Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.',
    img: quiz,
    link: 'https://quiz-gtiw0foev-o-wagner.vercel.app'
  },
  { 
    id: 2, 
    name: 'Gerador de QR CODE', 
    description: 'Página Web com gerador de QR CODE básico, projeto desenvolvido também para um trabalho da faculdade utilizando REACT.', 
    img: qrcode,
    link: 'https://gerador-de-qr-code-pearl.vercel.app' 
  },
  { 
    id: 3,
     name: 'BuscaCEP', 
     description: 'Página Web com um formulário que completa os campos de endereço após preencher o campo CEP.' +
     ' Projeto desenvolvido em REACT.', 
     img: buscacep ,
     link: 'https://busca-cep-tan.vercel.app'
  },
  {
    id: 4,
    name: 'Tabela do Brasileirão',
    description: 'Tabela de classificação Brasileirão Serie A.' 
    + ' Projeto desenvolvido com React utilizando API de futebol de times brasileiros.',  
    img: brasileirao,
    link: 'https://brasileirao-cnyv3d6c6-o-wagner.vercel.app'
  },
  { 
    id: 5,
     name: 'MyServices', 
     description: 'O My Services é um projeto desenvolvido em React Native, usando Expo, foi desenvolvido para o trabalho final'
     +' da disciplina de desenvolvimento mobile, com o intuito de fazer um protótipo para o meu projeto de TCC', 
     img: myservices,
     link: 'https://github.com/o-wagner/my-services'
  },

]


const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Abaixo você pode conferir alguns de meus projetos</p>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="projects-card" id={proj.id} key={proj.id}>
            <h4>{proj.name}</h4>
            <div className="imagem">
              <img src={proj.img} />
            </div>
            <div className="description">
              <p >{proj.description}</p>
            </div>
            <div className="button">
              <a href={proj.link} className="btn">Visualizar Projeto</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer