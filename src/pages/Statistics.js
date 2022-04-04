import React from "react";
import Graph from "../components/Graph";
import Navbar_User from "../components/Navbar_User";

class Statistics extends React.Component{
    render(){
        return(
            <div>
                <Navbar_User/>
                <div>
                <Graph/>
                </div>
            </div>
        )
    }
}

export default Statistics