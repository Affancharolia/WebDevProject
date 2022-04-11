import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  
  const [user, setUser] = useState({
    ufname: "", ulname: "", uemail: "", upassword: "", ucontact: "", ulocation: "", udob: "", ugender: ""
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  } 
  
  const PostUser = async (e) =>{

    e.preventDefault();
    const {ufname, ulname, uemail, upassword, ucontact, ulocation, udob, ugender} = user;
 
   

    const res = await fetch("/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ufname, ulname, uemail, upassword, ucontact, ulocation, udob, ugender
        })
    });

    
    if(res.status === 422){
      window.alert("Email already exists");
      history.push("/register");
    }
    else
    {
      window.alert("Registration successfull");
      history.push("/login");
    }
}
  
  return (
    <div class="container2">
        <h2>CREATE ACCOUNT</h2>
        <form method="POST">
            <input type="text" name="ufname" autocomplete="off" value={user.ufname} onChange={handleInputs} placeholder="First Name" required/>
            <input type="text" name="ulname" autocomplete="off" value={user.ulname} onChange={handleInputs} placeholder="Last Name" required/>
            <input type="email" name="uemail" autocomplete="off" value={user.uemail} onChange={handleInputs} placeholder="Email ID" required/>
            <input type="password" name="upassword" autocomplete="off" value={user.upassword} onChange={handleInputs} placeholder="Password" required/>
            <input type="number" name="ucontact" autocomplete="off" value={user.ucontact} onChange={handleInputs} placeholder="Contact no" required/>
            <input type="text" name="ulocation" autocomplete="off" value={user.ulocation} onChange={handleInputs} placeholder="Location" required/>
            <input type="date" name="udob" autocomplete="off" value={user.udob} onChange={handleInputs} placeholder="Date Of Birth" required/>
            <input type="text" name="ugender" autocomplete="off" value={user.ugender} onChange={handleInputs} placeholder="Gender" required/>
            <input id="sub" type="submit" value="Sign Up" onClick={PostUser}/>
            <a href="/login" class="btn">Log In</a>
        </form>
        </div>
  )
}

export default Register