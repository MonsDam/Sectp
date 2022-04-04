import React from "react";
import Graph from "../components/Graph";
import NavbarUser from "../components/Navbar_User";

class Statistics extends React.Component{
    render(){
        return(
            <div>
                <NavbarUser/>
                <div className="container my-4">
                <Graph/> 
                </div>
            </div>
        )
    }
}

export default Statistics