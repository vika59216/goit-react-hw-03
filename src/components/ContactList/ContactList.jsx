import React from 'react'
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"


const ContactList = ({ users, onDeleteUser, boxTitle }) => {
    return (
        <div className={css.mailbox}>
            <h2 className={css.mailboxTitle}>{boxTitle}</h2>

            <ul className={css.contactList}>
            {Array.isArray(users) &&
                users.map((user) => {
                    return (
                        <Contact
                            key={user.id}
                            onDeleteUser={onDeleteUser}
                            user={user} />
                    );
                })}
                </ul>

        </div>
    
    );
};

export default ContactList



