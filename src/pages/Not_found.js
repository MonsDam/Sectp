import React from "react";
import '../estilos/Not_Found.css';

class Not_found extends React.Component{
    render(){
        return(
            <div className="d-flex full-screen">
                <div className="m-auto">
                <h1>Page not found</h1>
                <img src="/images/notfound.jpg" className="img-notfound" alt="no puede ser"/>
                </div>
            </div>
        )
    }
}

export default Not_found