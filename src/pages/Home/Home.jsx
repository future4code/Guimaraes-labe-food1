import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>

               <div onClick={() => goToLoginPage(navigate)}>
                <h1>Rappi4A</h1>
               </div>

          </div>

        </div>
    )
}

export default Home
