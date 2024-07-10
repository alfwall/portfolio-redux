import Header from "../../Header"
import Footer from "../../Footer"

function Resume() {
    return (
        <>
            <Header selected="resume" />
            {/* Put downloadable file here */}
            <a href="">
                <img src="" alt="A download symbol" />
            </a>
            <Footer />
        </>
    );
}

export default Resume;