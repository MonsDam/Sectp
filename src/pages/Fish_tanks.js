import React from "react";
import CardFishtank from "../components/Card_Fishtank.js";
import NavbarUser from "../components/Navbar_User.js";
import TitleFishTanks from "../components/Title_FishTanks.js";

class FishTanks extends React.Component{
    render(){
        return(
            <div>
                <NavbarUser/>
                <TitleFishTanks/>
                <div className="container">
                <CardFishtank/>
                </div>
            </div>
        )
    }
}

export default FishTanks