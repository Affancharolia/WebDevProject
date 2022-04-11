import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


const CreateCompany = () => {

  const history = useHistory();
  
  const [company, setCompany] = useState({
    cname: "", ctype: "", cnum: "", cemail: "", clocation: "", cdescription: ""
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setCompany({...company, [name]:value});
  } 
  
  const PostCompany = async (e) =>{

    e.preventDefault();
    const {cname, ctype, cnum, cemail, clocation, cdescription} = company;
 
   

    const res = await fetch("/create_company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cname, ctype, cnum, cemail, clocation, cdescription
        })
    });

    
    if(res.status === 200){
      window.alert("Company successfully registered");
      history.push("/company");
    }
    else
    {
      window.alert("Something went wrong");
      history.push("/create_company");
    }
  }

  return (
    <div class="container2">
        <h2>CREATE COMPANY</h2>
        <form method="post">
            <input type="text" name="cname" autocomplete="off" value={company.cname} onChange={handleInputs} placeholder="Company Name" required/>
            <input type="text" name="ctype" autocomplete="off" value={company.ctype} onChange={handleInputs} placeholder="Company Type" required/>
            <input type="number" name="cnum" autocomplete="off" value={company.cnum} onChange={handleInputs} placeholder="Contact Number" required/>
            <input type="email" name="cemail" autocomplete="off" value={company.cemail} onChange={handleInputs} placeholder="Email Address" required/>
            <input type="text" name="clocation" autocomplete="off" value={company.clocation} onChange={handleInputs} placeholder="Location" required/>
            <input type="text" name="cdescription" autocomplete="off" value={company.cdescription} onChange={handleInputs} placeholder="Company Description" required/>
            <input id="sub" type="submit" value="Create" onClick={PostCompany}/>
        </form>
        </div>
  )
}

export default CreateCompany