import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Avatar, Typography, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ContactForm } from 'components/ContactForm';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  border: '1px solid #808080',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Contact = ({ name, number, id }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar sx={{ mr: '10px' }}>{name[0]}</Avatar>
      <Box>
        <Typography>{name}</Typography>
        <Typography>{number}</Typography>
      </Box>
      <Box sx={{ ml: 'auto' }}>
        
    <React.Fragment>
      <EditIcon
        aria-label="update"
        type="button"
        sx={{ mr: '6px', color: '#808080', "&:hover": {
        color: "#1976d2"} }}
        onClick={handleOpen}
      />
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <CloseIcon sx={{ mb: '10px', color: '#808080', "&:hover": {
        color: "#1976d2"} }} onClick={handleClose} />
          <ContactForm />
        </Box>
      </Modal>
    </React.Fragment>

      <DeleteIcon
        aria-label="delete"
        type="button"
        sx={{ ml: 'auto', color: '#808080', "&:hover": {
        color: "#1976d2"} }}
        onClick={() => dispatch(deleteContact(id))}
      />
      </Box>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact, updateContact } from 'redux/contacts/operations';
// import { Box, Avatar, Typography } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';


// export const Contact = ({ name, number, id }) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Avatar sx={{ mr: '10px' }}>{name[0]}</Avatar>
//       <Box>
//         <Typography>{name}</Typography>
//         <Typography>{number}</Typography>
//       </Box>
//       <Box sx={{ ml: 'auto' }}>
//       <EditIcon
//         aria-label="update"
//         type="button"
//         sx={{ mr: '6px', color: '#808080', "&:hover": {
//         color: "#FFA500"} }}
//         onClick={() => dispatch(updateContact(id))}
//       />
//       <DeleteIcon
//         aria-label="delete"
//         type="button"
//         sx={{ ml: 'auto', color: '#808080', "&:hover": {
//         color: "#FFA500"} }}
//         onClick={() => dispatch(deleteContact(id))}
//       />
//       </Box>
//     </>
//   );
// };

// Contact.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
// };