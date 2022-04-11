import React, {useEffect, useState} from 'react'

const Company = () => {

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

  return (
    <div>
      <div class="archi">
            <form  method="post" action="">
                <input type="number" name="cname" placeholder="Company name" required/>
                <input id="sub" type="submit" value="Search"/>
            </form>
        </div> 
                    
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
  )
}

export default Company