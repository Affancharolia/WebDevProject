import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const CreateEvent = () => {

  const history = useHistory();
  
  const [event, setEvent] = useState({
    ename: "", etype: "", eaccomodation: "", eprice: "", edate: "", elocation: "", edescription: ""
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setEvent({...event, [name]:value});
  } 
  
  const PostEvent = async (e) =>{

    e.preventDefault();
    const {ename, etype, eaccomodation, eprice, edate, elocation, edescription} = event;
 
   

    const res = await fetch("/create_event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:"include",
        body: JSON.stringify({
          ename, etype, eaccomodation, eprice, edate, elocation, edescription
        })
    });

    
    if(res.status === 200){
      window.alert("Event successfully registered");
      history.push("/");
    }
    else
    {
      window.alert("Something went wrong");
      history.push("/create_event");
    }
}

  return (
    <div class="container2">
        <h2>CREATE EVENT</h2>
        <form method="post">
            <input type="text" name="ename" autocomplete="off" value={event.ename} onChange={handleInputs} placeholder="Event Name" required/>
            <input type="text" name="etype" autocomplete="off" value={event.etype} onChange={handleInputs} placeholder="Event Type" required/>
            <input type="number" name="eaccomodation" autocomplete="off" value={event.eaccomodation} onChange={handleInputs} placeholder="Max Accomodation" required/>
            <input type="number" name="eprice" autocomplete="off" value={event.eprice} onChange={handleInputs} placeholder="Ticket Price" required/>
            <input type="date" name="edate" autocomplete="off" value={event.edate} onChange={handleInputs} placeholder="Event Date" required/>
            <input type="text" name="elocation" autocomplete="off" value={event.elocation} onChange={handleInputs} placeholder="Location" required/>
            <input type="text" name="edescription" autocomplete="off" value={event.edescription} onChange={handleInputs} placeholder="Event Description" required/>
            <input id="sub" type="submit" value="Create" onClick={PostEvent}/>
        </form>
        </div>
  )
}

export default CreateEvent