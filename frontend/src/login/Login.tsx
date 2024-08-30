import * as React from 'react';
import LoginForm from './LoginForm';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { login, createAcct } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    await login(email, password);  
    setIsLoading(false);
  }

  const handleCreateAcct = async(email: string, password: string, name: string) => {
    setIsLoading(true);
    await createAcct(email, password, name);
    setIsLoading(false);
  }
  
  return (
    <section id="login-sec">
      <h1>Let's Get Dirtie</h1>
      <LoginForm loginCb={handleLogin} createAcctCb={handleCreateAcct}/>
      { isLoading ? 
      <div id="loader">Loading...</div>
      : '' }
    </section>
  );
}
