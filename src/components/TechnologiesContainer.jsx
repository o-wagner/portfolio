import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
} from "react-icons/di";


import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, level: "90%", class: "skills html"},
  { id: "css", name: "CSS3", icon: <DiCss3 />, level: "90%", class: "skills css"},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: "50%", class: "skills js"},
  { id: "native", name: "React Native", icon: <DiReact />, level: "60%", class: "skills native" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, level: "80%", class: "skills sql"},
  { id: "react", name: "ReactJs", icon: <DiReact />, level: "55%", class: "skills react"},
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-name">
              <h3>{tech.name}</h3>
            </div>
              <div class="container">
                <div class={tech.class}>{tech.level}</div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer