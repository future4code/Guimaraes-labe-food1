import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { gotToHome } from "../routes/coordinator";

export const login = (body, clear, history) => {

    axios.post(`${BASE_URL}/rappi4A/login`, body)

    .then((res) => {

        localStorage.setItem("token", res.data.token)

        clear()

        gotToHome(history)
    } )

    .catch((err) => alert("Erro ao efetuar Login"))
}
