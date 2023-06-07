import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [error,setError] = useState(null)
    const fetchData = async() => {
        setIsLoading(true)
        try{
            const response = await fetch(url)
            const jsonData = await response.json()
            setData([...data,jsonData])
            setIsLoading(false)
        }catch (error){
            setError(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url]);

    return {data,isLoading,error}
}

export default useFetchData