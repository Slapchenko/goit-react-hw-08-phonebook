import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { ContactList } from 'components/ContactList';
import { Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Contactc() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // width: 320,
        margin: '0 auto',
      }}
    >
      <Section headTitle="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
                <Filter />
                
                    <Stack direction="row" spacing={2} sx={{ml: 'auto'}}>
      <Button size="large" variant="text" startIcon={<AddBoxIcon />}>
        Add
      </Button>

    </Stack>
    

        <ContactList />
        {isLoading && !error && <Loader />}
      </Section>
    </Box>
  );
}
