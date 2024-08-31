import * as React from 'react';
import LoginForm from './LoginForm';
import { useAuth } from '../hooks/useAuth';
import Title from '../core/Title';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

interface ILoginProps {
  onLogin: (loggedIn: boolean) => void;
}

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: 20,
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(174, 100%, 29%, .5), hsl(174, 30%, 5%) 70%)',
  }),
}));

export default function Login(props: ILoginProps) {
  const { login, createAcct } = useAuth();

  const handleLogin = (email: string, password: string) => {
    login(email, password);  
    props.onLogin(true);
  }

  const handleCreateAcct = (email: string, password: string, name: string) => {
    createAcct(email, password, name);
    props.onLogin(true);
  }
  
  return (
    <SignInContainer>
      <Title title="Let's Get Dirtie"/>
      <LoginForm loginCb={handleLogin} createAcctCb={handleCreateAcct}/>
    </SignInContainer>
  );
}
