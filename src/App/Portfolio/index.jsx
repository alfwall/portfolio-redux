import Header from "../Header"
import Footer from "../Footer"
import Project from "../Project"

let myProjects = [
    {
        name: "Reading Roundtable",
        url: "",
        description: "Search and save books!",
        image: "../../reading-roundtable-screenie.png"
    },
    {
        name: "Cattzeria",
        url: "",
        description: "A clicker game for cats that like pizza! Lasagna cats need not apply.",
        image: "../../cattzeria-screenie.png"
    }
];


function Portfolio() {
    return (
        <>
            <Header selected="portfolio" />
            <div className="col-xs-12">
                <h2>My Portfolio</h2>
                <ul>
                    {myProjects.map((proj) => (
                        <Project project={proj} key={proj.name} />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;