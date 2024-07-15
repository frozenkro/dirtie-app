import * as React from 'react';
import { main } from '../../wailsjs/go/models';
import { TryLogin } from '../../wailsjs/go/main/App';
interface ILoginProps {
  setUserCb: (user: main.User) => void;
}
export default function Login(props: ILoginProps) {
  // DEBUG - link this to actual login inputs later
  props.setUserCb(TryLogin({ 
    username: 'testuser', 
    password: 'testpw' })
  );

  React.useEffect(() => {
    async function login() {
      const user = await TryLogin({ 
        username: 'testuser', 
        password: 'testpw' });

      if (user) {
        props.setUserCb(user);
      }
    };
    login();
  }, []);
  return (<></>);
}
