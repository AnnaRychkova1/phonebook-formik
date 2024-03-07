import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={css.contactInfo}>
      <p className={css.contactInfoItem}>
        <IoPersonSharp size={16} />
        <span>{name}</span>
      </p>

      <p className={css.contactInfoItem}>
        <FaPhone size={16} />
        <span>{number}</span>
      </p>
    </div>
  );
};

export default Contact;
