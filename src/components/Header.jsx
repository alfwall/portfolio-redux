import "../css/App.css"


function Header() {
    return (
        <header className="row">
            <span className="col-sm-12">Alfred Wallace</span>
            <a href="/" className="col-sm-12">About Me</a>
            <a href="/portfolio" className="col-sm-12">Portfolio</a>
            <a href="/contact" className="col-sm-12">Contact</a>
            <a href="/resume" className="col-sm-12">Resume</a>
        </header>
    );
}

export default Header;