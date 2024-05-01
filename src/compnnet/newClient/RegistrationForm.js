import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

   
    const handleSubmit = (event) => {
        event.preventDefault();
        handleClient(firstName, lastName, email, password, passwordAgain);

      };

      const handleClient = async (firstName, lastName, email, password, passwordAgain) => {
        try {
            const client = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              password_again: passwordAgain,
            };

            await props.register(client);
          

       
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordAgain("");
        props.cancel();

    } catch (error) {
        console.error("Error during registration:", error);
      }
    };
 
    const handleNameChange = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handlePasswordAgainChange = (event) => {
        setPasswordAgain(event.target.value);
      };
      
      
      const handleCancel = () => {
        props.cancel(); 
      
      };

    return(
        <form onSubmit={handleSubmit}>
            <div className="new-registration__controls">

                <div className="new-registration__control">
                    <label>first name</label>
                    <input type="text" onChange={handleNameChange} value={firstName} name="firstName" autoComplete="username" required></input>
                </div>
                
                <div className="new-registration__control">
                <label>last name</label> 
                <input type="text" onChange={handleLastNameChange} value={lastName} name="lastName" required />
                </div>

                <div className="new-registration__control">
                <label>email</label> 
                <input type="text" onChange={handleEmailChange} value={email} required />
                </div>

                <div className="new-registration__control">
                    <label>password</label>
                    <input type="password" onChange={handlePasswordChange}  autoComplete="new-password" required></input>
                </div>

                <div className="new-registration__control">
                    <label>password again</label>
                    <input type="password" onChange={handlePasswordAgainChange}  autocComplete="new-password" required></input>
                </div>
                
                <div className="new-registration__actions">
                <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="submit">Entrance</button>
                </div>
               

            </div>
        </form>
    )

}

export default RegistrationForm;