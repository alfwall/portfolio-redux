import "./index.css"

function Project({ project }) {
    return (
        <li className="project-li col-xs-12 col-sm-6" key={project.name}>
            <a href={project.url}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
            </a>
            <a href={project.github} className="github-url">
              <span>Github</span>  
            </a>
        </li>
    );
}

export default Project;