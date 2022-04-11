import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {

  const {stateUser, dispatchUser} = useContext( UserContext );

  const RenderMenu = () => {
      if(stateUser){
        return (
          <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/company">Company</NavLink></li>
            <li><NavLink to="/create_event">Create Event</NavLink></li>
            <li><NavLink to="/create_company">Create Company</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/logout">Log Out</NavLink></li>
          </>
        )
      } else{
        return(
          <>
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/company">Company</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </>
        )
      }
  }

  return (
    <div>
        <ul>
          <RenderMenu />
        </ul>
    </div>
  )
}

export default Navbar