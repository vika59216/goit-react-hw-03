import React from 'react'



const ContactForm = ({onAddUser}) => {


    const handleSubmit = (event) => {
        event.preventDefault();

        const userName = event.currentTarget.elements.userName.value;
        const userPhone = event.currentTarget.elements.userPhone.value;

        const formData = {
            userPhone,
            userName
        }
        onAddUser(formData)

        event.currentTarget.reset();
    };
  return (
      <form onSubmit={handleSubmit}>
          <h2>Phonebook</h2>
          <label>
              <span>Name</span>
              <br/>
              <input
                  type="text" name="userName"  required
              />
          </label>
           <br />
          
           <label>
              <span>Number</span>
               <br/>
              <input
                  type="phone" name="userPhone" required
              />
             
          </label>
          <br/>
           <button type="submit">Add Contact</button>
      </form>
  )
}

export default ContactForm








