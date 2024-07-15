import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

function Contact() {
    return (
        <>
            <Header selected="contact" />
            <form id="contact-form" className="col-xs-12">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <div className="button-holder">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Contact;