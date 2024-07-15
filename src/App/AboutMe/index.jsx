import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

function AboutMe() {
  return (
    <>
      <Header selected="about-me" />
      <div id="about-me" className="col-xs-12">
        <div className="row">
          <div className="img-div col-sm-6 col-xs-12">
            <img src="../selfie.jpg" alt="A photo of Alfred." />
          </div>
          <div className="about-me-text col-sm-6 col-xs-12">
            <h2>About Me</h2>
            <p>
              Alfred is an established software engineer with 8 years of experience
              building applications for web and desktop platforms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;