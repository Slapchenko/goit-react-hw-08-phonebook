import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Form } from './ContactForm.styled';
import { TextField, Button } from '@mui/material';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const savedNamesList = contacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();

    if (savedNamesList.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        name="name"
        type="text"
        required
        sx={{ mb: '15px' }}
        value={name}
        onChange={handleChange}
      />
      <TextField
        label="Number"
        variant="outlined"
        size="small"
        name="number"
        type="tel"
        required
        sx={{ mb: '15px' }}
        value={number}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit" sx={{ mb: 2 }}>
        Add contact
      </Button>
    </Form>
  );
}
