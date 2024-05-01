import React from "react";
import './ClientRegistration.css';

function ClientRegistration(props){
    return(
        <div>
           <div className="registration-student__description">
            <h2>{props.name.firstName}</h2>
            <div className="registration-student__course">
               {props.name.lastName} 
                 </div>
            </div>     
        </div>          
    );
}

export default ClientRegistration;

