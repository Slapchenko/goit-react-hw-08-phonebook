import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        variant="outlined"
        size="small"
        name="name"
        type="text"
        required
        sx={{ mb: '15px' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        required
        sx={{ mb: '15px' }}
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        name="password"
        type="password"
        required
        sx={{ mb: '15px' }}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Form>
  );
};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// // import css from './RegisterForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       {/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off"> */}
//       <label>
//         {/* <label className={css.label}> */}
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         {/* <label className={css.label}> */}
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         {/* <label className={css.label}> */}
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// .form {
//   width: 320px;
// }

// .label {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
// }
