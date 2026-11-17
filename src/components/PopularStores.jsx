export default function PopularStores(){

    const [ stores, setStores ] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/retailers")
    .then((response)=> response.json())
    .then((data)=> setStores(data))
    })

    return (
        <>
        </>
    )
}