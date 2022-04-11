import React, {useEffect, useState} from 'react'

const Home = () => {

  const [events, setEvents] = useState([{
    ename: '',
    etype: '',
    eaccomodation: '',
    eprice: '',
    edate: '',
    elocation: '',
    edescription: ''
  }]) 

  useEffect(() => {
    fetch("/get_event").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setEvents(jsonRes));
  })

  return (
    <div>
      <div class="archi">
            <form  method="post" action="">
                <input type="number" name="userid" placeholder="Event Type" required/>
                <input id="sub" type="submit" value="Search"/>
            </form>
        </div> 
                    
                    {events.map(event =>
                      <div id="header">
                      <p>Event name: {event.ename} </p>
                      <p>Type: {event.etype}</p>
                      <p>Accomodation:{event.eaccomodation}</p>
                      <p>Price:{event.eprice}</p>
                      <p>Edate:{event.edate}</p>
                      <p>Location:{event.elocation}</p>
                      <p>Description:{event.edescription}</p>
                      </div>
                    )};
                    
    </div>
  )
}

export default Home