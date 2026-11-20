import { useState } from "react";
import ReviewsForm from "./ReviewForm";
import ShopCard from "./ShopCard";

export default function SideCard({store}) {

    const [isFormOpen, setIsFormOpen] = useState(false)

    function handleClick() {
        setIsFormOpen(!isFormOpen)
    }

    return (
        <div className="side-card">
            <ShopCard store={store} handleClick={handleClick}/>
            {isFormOpen && (<ReviewsForm/>)}
        </div>
    )
}