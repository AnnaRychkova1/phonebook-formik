import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              {...contact}
              // name={contact.name}
              // number={contact.number}
              // id={contact.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
