import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Avatar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Avatar sx={{ mr: '10px' }}>{name[0]}</Avatar>
      <Box>
        <Typography>{name}</Typography>
        <Typography>{number}</Typography>
      </Box>

      <DeleteIcon
        color="error"
        type="button"
        sx={{ ml: 'auto' }}
        onClick={() => dispatch(deleteContact(id))}
      />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
