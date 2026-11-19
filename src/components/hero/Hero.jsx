import hero from "../../assets/Hero-2.png"
import "./Hero.css"



export default function Hero() {
    return (
        <header>
        <div className="left">
            <h1 className="text-green">Find the Deal, Keep the Difference</h1>
            <p>Compare prices across supermarkets and online shops, discover discounts, and find vouchers — all in one place.</p>
            <div>
                <a className="btn-outline theme-accent" href="#successful-stores">Get Started</a>
                <a className="btn-solid theme-accent mx-3" href="#contact-form">Contact us</a>
            </div>
        </div>

        <div className="right">
            <img src={hero} alt="hero"/>
        </div>
        <div className="bg-color"></div>
        
        </header>
    )
}