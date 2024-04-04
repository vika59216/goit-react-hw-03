import { useState } from "react";
import{setUsers} from "react"
import { nanoid } from "nanoid";
import "./App.css";


import meestExpressUsers from "./meesExpress.json";
import ContactForm from "./components/ContactForm/ContactForm"
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";



import React from 'react'

const App = () => {  
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return meestExpressUsers;
     
    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers
})



  const onAddUser = (formData) => {
   const finalUser = {
      ...formData,
      id: nanoid()
    }
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  return (
    <div>
      <ContactForm onAddUser={onAddUser} />
      <Contact />
      <ContactList />
      <SearchBox />
      <ContactList
        users={users}
        onDeleteUser={onDeleteUser}
        boxTitle=""
        
        
      />
    
    
     
      </div>
  )
}

export default App