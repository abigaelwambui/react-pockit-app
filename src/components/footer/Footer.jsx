import "./Footer.css"
import NavBar from "../NavBar/NavBar"

export default function Footer () {
    return (
        <>

        <footer >
        <div id="footer">
            <div className="container">
                <ul id="company-footer">
                    <li>
                        <h4>Company</h4>
                    </li>
                    <li>
                        <a aria-label="About" className="footer-link" href="#about-us">About</a>
                    </li>
                    
                    <li>
                        <a aria-label="Help" className="footer-link" href="#contact-us">Help</a>
                    </li>
                    <li>
                        <a aria-label="News" className="footer-link" href="#">News</a>
                    </li>
                    <li>
                        <a aria-label="Media" className="footer-link" href="#">Media</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <ul id="follow-footer">
                    <li>
                        <h4>Follow Us</h4>
                    </li>
                    <li>
                        <a aria-label="Facebook" href="https://www.facebook.com/" className="footer-link">Facebook</a>
                    </li>
                    <li>
                        <a aria-label="Twitter" href="https://www.x.com/" className="footer-link">Twitter</a>
                    </li>
                    <li>
                        <a aria-label="Instagram" href="https://www.instagram.com/" className="footer-link">Instagram</a>
                    </li>
                    <li>
                        <a aria-label="Pinterest" href="https://www.pinterest.com/" className="footer-link">Pinterest</a>
                    </li>
                </ul>
                
                
                
            </div>
        </div>
        
        <hr/>
        <p className="mx-3">©2026 Pockit-ECommerce Co.</p>
    </footer>
        </>
    )
}