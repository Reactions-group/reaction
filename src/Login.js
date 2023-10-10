<<<<<<< HEAD
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navstyle.css'; 


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = () => {
    loginWithRedirect();
  };

  // Update the welcome message if the user is authenticated
  if (isAuthenticated) {
    setWelcomeMessage(`Welcome hiiiiiiiiiiiiiiiii, ${user.name}!`);
  }

  return (
    <div>
      <button
        className="btn btn-primary btn-block"
        onClick={handleLogin}
        id="LogIn"
      >
        Log In
      </button>
      {isAuthenticated && <div>{welcomeMessage}</div>}
    </div>
  );
=======
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect} = useAuth0();
    return(
        <button  
        className="btn btn-primary btn-block"
        onClick={()=> loginWithRedirect()}
        >
         Log In

        </button>
    );
>>>>>>> bed6a3e035072fba25c418ee0512d14a4f7b2192
};

export default LoginButton;
