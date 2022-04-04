import React from "react";
import Card_Fishtank from "../components/Card_Fishtank.js";
import Navbar_User from "../components/Navbar_User.js";
import Title_FishTanks from "../components/Title_FishTanks.js";

class Fish_tanks extends React.Component{
    render(){
        return(
            <div>
                <Navbar_User/>
                <Title_FishTanks/>
                <Card_Fishtank/>
            </div>
        )
    }
}

export default Fish_tanks