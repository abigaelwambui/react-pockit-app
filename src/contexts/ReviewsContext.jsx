import { createContext, useEffect, useState } from "react";

export const ReviewsContext = createContext()

export function ReviewsProvider ({children}) {

    const [reviews, setReviews] = useState([])
        useEffect (()=>{
            fetch(`http://localhost:4000/reviews`)
            .then ((response)=> response.json())
            .then ((data)=> {
                setReviews(data)
                console.log(data)
            })
        }, [])  

    return (
        <>
        <ReviewsContext.Provider value={{reviews, setReviews}}>
            {children}
        </ReviewsContext.Provider>
        </>
    )
}

