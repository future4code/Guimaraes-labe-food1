import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) =>{
    const [ data , setData ] = useState([])

    useEffect(()=>{
        const token = undefined
        const header = {
            'auth' : token,
            'Content-Type' : 'application/json'
        }

        axios
        .get(url, header)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{

        })
    },[url])
    
    return data
}