import React, {useEffect, useState} from 'react'

const Profile = () => {

  const [company, setCompany] = useState([{
    cname: '',
    ctype: '',
    cnum: '',
    cemail: '',
    clocation: '',
    cdescription: ''
  }]) 

  useEffect(() => {
    fetch("/get_company").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setCompany(jsonRes));
  })

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
    fetch("/get_event_user").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setEvents(jsonRes));
  })

  return (
    <div>

      <div>
                    
          {company.map(event =>
                      <div id="header">
                      <p>Company name: {event.cname} </p>
                      <p>Company Type: {event.ctype}</p>
                      <p>Contact number:{event.cnum}</p>
                      <p>Company Email:{event.cemail}</p>
                      <p>Company Location:{event.clocation}</p>
                      <p>Company Description:{event.cdescription}</p>
                      </div>
                    )};
                    
      </div>

      <div>
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
    </div>
  )
}

export default Profile