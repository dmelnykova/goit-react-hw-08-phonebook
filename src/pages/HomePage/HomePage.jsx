// import { Button, Link } from '@chakra-ui/react';
// import { useAuth } from '../../hooks/useAuth';

// export default function HomePage() {
//   const { isLoggedIn, userName } = useAuth();

//   return isLoggedIn ? (
//     <div>
//       <p>Hello {userName}!</p>
//       <Button
//         variant="link"
//         colorScheme="blue"
//         width="200px"
//         marginLeft="auto"
//         marginRight="auto"
//       >
//         <Link to="/contacts">To my contacts</Link>
//       </Button>
//     </div>
//   ) : (
//     <div style={{ textAlign: 'center', marginTop: '15%' }}>
//       <h1 style={{ fontSize: '40px' }}>Welcome to Phonebook!</h1>
//       <p style={{ fontSize: 'larger' }}>
//         Ready to take control of your contacts?
//         Just sign up or log in to your account and get started!
//       </p>
//     </div>
//   );
// }
import { Title, Wrapper, Text } from "./HomePage.styled";

export default function Home() {
  return (
    <Wrapper>
      <Title>
        Welcome to Phonebook!
      </Title>
      <Text>Just sign up or log in to your account and get started</Text>
    </Wrapper>
  );
}