import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) => {
    const [data, setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const headers = {
            headers: {
                auth: token,
                'Content-Type': 'application/json'
            }
        }
        axios
            .get(url, headers)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {

            })
    }, [url])

    return [data, setData , isLoading]
}