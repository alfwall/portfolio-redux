

function Project({project}) {
    return (
        <li key={project.name}>
            <a href={project.url}>{project.name}</a>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
        </li>
    );
}

export default Project;