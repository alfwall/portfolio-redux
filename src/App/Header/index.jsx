import "./index.css"

function Header() {
    return (
        <header id="header" className="col-xs-12">
            <div className="row">
                <span className="col-xs-12 col-sm-3">
                    Alfred Wallace
                </span>
                <a href="/about-me" className="col-xs-12 col-sm-2">
                    About Me
                </a>
                <a href="/portfolio" className="col-xs-12 col-sm-2">
                    Portfolio
                </a>
                <a href="/contact" className="col-xs-12 col-sm-2">
                    Contact
                </a>
                <a href="/resume" className="col-xs-12 col-sm-2">
                    Resume
                </a>
            </div>
        </header>
    );
}

export default Header;