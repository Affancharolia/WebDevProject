import React, { createContext, useReducer } from 'react';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Company from "./components/Company";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateEvent from "./components/CreateEvent";
import CreateCompany from "./components/CreateCompany";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import {initialStateUser, initialStateCompany, reducerUser, reducerCompany} from './reducer/UseReducer'
import "./App.css";


export const UserContext = createContext();
export const CompanyContext = createContext();

const Routing = () =>{
  return(
    <switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/company'>
        <Company />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>
      
      <Route path='/register'>
        <Register />
      </Route>

      <Route path='/create_event'>
        <CreateEvent />
      </Route>

      <Route path='/create_company'>
        <CreateCompany />
      </Route>

      <Route path='/profile'>
        <Profile />  
      </Route>

      <Route path='/logout'>
        <Logout />
      </Route>
    </switch>
  )
}


const App = () => {

  const [stateUser, dispatchUser] = useReducer(reducerUser, initialStateUser);
  const [stateCompany, dispatchCompany] = useReducer(reducerCompany, initialStateCompany);

  return (
    <>
    <UserContext.Provider value={{stateUser, dispatchUser}}>
      <CompanyContext.Provider value={{stateCompany, dispatchCompany}}>
        <Navbar />
        <Routing />
      </CompanyContext.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App