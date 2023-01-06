import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  title: {
    color: 'white',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return (
    <div ref={myRef} style={styles.container}>
      <h1 style={styles.title}>
        PhoneBook welcome page
      </h1>
    </div>
  );
}

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

// export default function Home() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>
//         PhoneBook welcome page{' '}
//         <span role="img" aria-label="Greeting icon">
//           💁‍♀️
//         </span>
//       </h1>
//     </div>
//   );
// }
