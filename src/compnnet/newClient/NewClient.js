import React, { useState } from "react";
import './NewClient.css';
import RegistrationForm from "./RegistrationForm";


function Newclient(props){

    const [showRegistrationForm, setShowRegistrationForm] = useState(false);   

    return(
        <div className="new-registration">
            {showRegistrationForm ?
     <RegistrationForm client={props.client}  cancel={() => setShowRegistrationForm(false)} 
     register={props.register}/> :
     <button onClick={() => setShowRegistrationForm(true)}>Registration Client</button>}
        </div>
    )
        
}

export default Newclient;