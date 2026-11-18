import "./Footer.css"

export default function Footer () {
    return (
        <>

        <footer >
        <div id="footer">
            <div class="container">
                <ul id="company-footer">
                    <li>
                        <h4>Company</h4>
                    </li>
                    <li>
                        <a aria-label="About" class="footer-link" href="#about-us">About</a>
                    </li>
                    
                    <li>
                        <a aria-label="Help" class="footer-link" href="#contact-us">Help</a>
                    </li>
                    <li>
                        <a aria-label="News" class="footer-link" href="#">News</a>
                    </li>
                    <li>
                        <a aria-label="Media" class="footer-link" href="#">Media</a>
                    </li>
                </ul>
            </div>
            <div class="container">
                <ul id="follow-footer">
                    <li>
                        <h4>Follow Us</h4>
                    </li>
                    <li>
                        <a aria-label="Facebook" href="https://www.facebook.com/" class="footer-link">Facebook</a>
                    </li>
                    <li>
                        <a aria-label="Twitter" href="https://www.x.com/" class="footer-link">Twitter</a>
                    </li>
                    <li>
                        <a aria-label="Instagram" href="https://www.instagram.com/" class="footer-link">Instagram</a>
                    </li>
                    <li>
                        <a aria-label="Pinterest" href="https://www.pinterest.com/" class="footer-link">Pinterest</a>
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