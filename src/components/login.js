
import React from "react";
import {FetchNewToken, CheckForToken} from "../api/LoginAPIcalls";
import { useHistory } from "react-router-dom";

const Login = ({setToken, username, password, setUsername, setPassword}) => {
    let history = useHistory();
 
    return (
        <form  id='loginForm'onSubmit={(e) => {
            e.preventDefault(); 
            CheckForToken (username, password, setToken);
            
          }}>
              <h2>Start making posts</h2>
            <div>
                <label>Username: </label>
                <input type='text' placeholder='username' onChange={(e) => {setUsername(e.target.value)}}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type='text' placeholder='password' onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
            <div id='loginButtons'>
           
                <button type="submit">Login</button>
                <button  onClick={()=>{
                    (username && password) ? (FetchNewToken(username, password, setToken) && history.push("/home")) : console.log("need token")
                }}>Sign Up</button>

            </div>
        </form>
    )
}

export {Login}