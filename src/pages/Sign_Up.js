import React from "react";
import Navbar from "../components/Navbar";
import Form_Signup from "../components/Form_Signup";

class Sign_Up extends React.Component{
    render(){
            return( <div>
                    <div>
                    <div ><Navbar/></div>
                    <div ><Form_Signup/></div>
                    </div>
                    </div>
                    )
            }
}

export default Sign_Up