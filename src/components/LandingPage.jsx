import Hero from "./hero/Hero";
import HowItWorks from "./howitworks/HowItWorks";
import PopularStores from "./PopularStores";
import SuccessfulStores from "./SuccessfulStores";

export default function LandingPage() {
    return (
        <>
        <Hero/>
        <HowItWorks/>
        <br/>
        <hr/>
        <br/>
        <SuccessfulStores/>
        <br/>
        <PopularStores/>
        </>
    )
}