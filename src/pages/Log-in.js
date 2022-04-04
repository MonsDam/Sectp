import React from "react";
import Navbar from "../components/Navbar";
import FormLogin from "../components/Form_Login";

class Log_in extends React.Component{
    render(){
            return( <div className="bg_image " >
                    <div className="mask" >
                    <div ><Navbar/></div>
                    <div ><FormLogin/></div>
                    </div>
                    </div>
                    )
            }
}

export default Log_in