import "./index.css"

function Footer() {
    return (
        <footer id="footer" className="col-xs-12">
            <div id="footer" className="row">
                <a href="https://github.com/alfwall" 
                    className="col-sm-4 col-xs-12"
                    id="github-link">
                    Github
                </a>
                <a href="https://github.com/alfwall" 
                    className="col-sm-4 col-xs-12">
                    LinkedIn
                </a>
                <a href="https://stackoverflow.com/users/6519655/" 
                    className="col-sm-4 col-xs-12">
                    StackOverflow
                </a>
            </div>
        </footer>
    );
}

export default Footer;