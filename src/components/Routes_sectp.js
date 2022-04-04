import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Log_in from "../pages/Log-in";
import Fish_tanks from "../pages/Fish_tanks";
import Not_found from "../pages/Not_found";
import Sign_Up from "../pages/Sign_Up";
import Statistics from "../pages/Statistics";
import Settings from "../pages/Settings";

function Routes_sectp(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/Login" element={<Log_in/>}/>
            <Route path="/Fish_tanks" element={<Fish_tanks/>}/>
            <Route path="/Signup" element={<Sign_Up/>}/>
            <Route path="/Statistics" element={<Statistics/>}/>
            <Route path="/Settings" element={<Settings/>}/>
            <Route path="*" element={<Not_found/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes_sectp