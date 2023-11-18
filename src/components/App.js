import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };
  addContact = newContact => {
    const contact = {...newContact, id: nanoid()}
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, contact]}
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm updateContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.handleFilter} />
        {visibleContacts.length > 0 && (
          <ContactList items={visibleContacts} onDelete={this.deleteContact} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
