import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data,setData] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [error,setError] = useState(null)
    const fetchData = async() => {
        setIsLoading(true)
        try{
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
            setIsLoading(false)
        }catch (error){
            setError(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[url]);

    return {data,isLoading,error}
}

export default useFetchData