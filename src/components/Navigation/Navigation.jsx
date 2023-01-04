import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button variant="inherit">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="inherit">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};

// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// // import css from './Navigation.module.css';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavLink to="/">
//         {/* <NavLink className={css.link} to="/"> */}
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink to="/contacts">
//           {/* <NavLink className={css.link} to="/tasks"> */}
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;
// }

// .link.active {
//   color: #e84a5f;
// }
