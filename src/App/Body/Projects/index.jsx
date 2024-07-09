let myProjects = [
    {
        name: "Reading Roundtable",
        url: "",
        description: "",
        image: ""
    },
    {
        name: "Cattzeria",
        url: "",
        description: "",
        image: ""
    }
];


function Projects() {
    return (
        <div className="col-xs-12">
            <h2>My Portfolio</h2>
            <ul>
                {myProjects.map(project => (
                    <li key={project.name}>
                        <a href={project.url}>{project.name}</a>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;