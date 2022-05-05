import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>

               <div onClick={() => goToLogin(navigate)}>
                <h1>Rappi4A</h1>
               </div>

          </div>

        </div>
    )
}

export default Home
