import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

const Login = () => {

  const {stateUser, dispatchUser} = useContext( UserContext );

  const history = useHistory();

  const [login, setLogin] = useState({
    uemail: "", upassword: ""
  });

  let name, value;

  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setLogin({...login, [name]:value});
  } 

  const LoginUser = async (e) =>{

    e.preventDefault();

    const {uemail, upassword} = login;

    const res = await fetch("/validation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uemail, upassword
      })
  });

    if(res.status === 400){
      window.alert("Invalid Credentials");
      history.push("/login");
    }
    else
    {
      dispatchUser({type:"USER", payload:true})
      window.alert("Login successfull");
      history.push("/");
    }
    
}
  
  return (
    <div>
        <div className="container">
        <h2>Log-In</h2>
        <form method="post">
            <input type="email" name="uemail" autocomplete="off" value={login.uemail} onChange={handleInputs} placeholder="Email ID" required/>
            <input type="password" name="upassword" autocomplete="off" value={login.upassword} onChange={handleInputs} placeholder="Password" required/>
            <input id="sub" type="submit" value="Log In" onClick={LoginUser}/>
            <a href="/register" class="btn">Create Account</a>
        </form>
        </div>
    </div>
  )
}

export default Login