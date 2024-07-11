import ContactForm from 'src/components/ContactForm/ContactForm';
import ContactList from 'src/components/ContactList/ContactList';
import SearchBox from 'src/components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
