import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"


const useUnprotectedPage = () => {

    const history = useNavigate()

    useEffect(() => {
        
        const token = localStorage.getItem('token')

        if(token){

            goToHome(history)
        }

    }, [history])
}

export default useUnprotectedPage
