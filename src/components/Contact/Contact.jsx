
import React from 'react'


const Contact = ({user, onDeleteUser}) => {
  return (
    <li>
      <p>
        Name: <b>{user.userName }</b>
      </p>
      <p>
         Phone: <b>{user.userPhone }</b>
      </p>
      <button type="button" onClick={() => onDeleteUser(user.id)}></button>
    </li>
 
  )
}

export default Contact