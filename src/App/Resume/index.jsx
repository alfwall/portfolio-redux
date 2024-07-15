import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

function Resume() {
    return (
        <>
            <Header selected="resume" />
            <div id="resume-div" className="col-xs-12">
                <h2>My Resume</h2>
                <a href="../../AlfredWallace_SoftwareEngineer.pdf">
                    <img src="../../download.png" alt="A download symbol" />
                </a>
            </div>
            <Footer />
        </>
    );
}

export default Resume;