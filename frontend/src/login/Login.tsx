import * as React from 'react';
import { main } from '../../wailsjs/go/models';
import { TryLogin } from '../../wailsjs/go/main/App';
import { auth } from '../firebase';
import { auth as uiAuth } from 'firebaseui';
import { EmailAuthProvider, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { User } from '../models/User';
import '../../node_modules/firebaseui/dist/firebaseui.css';

interface ILoginProps {
  setUserCb: (user: User) => void;
}
export default function Login(props: ILoginProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [fbUI, setFbUI] = React.useState<uiAuth.AuthUI>();
  
  const onSignInSuccess = (authResult: UserCredential, _redirectUrl: string | undefined): boolean => {
    //TODO figure out what authResult looks like,
    //convert into User context?

    const user: User = { 
      uid: authResult.user.uid,
      email: authResult.user.email || undefined,
      displayName: authResult.user.displayName || undefined,
      refreshToken: authResult.user.refreshToken,
      dirtieUserId: getDirtieUserId(authResult.user.uid),
    };
    
    props.setUserCb(user);

    // Return type determines whether redirectUrl is automatically followed
    return false;
  };

  const onFbUiLoaded = (): void => {
    setIsLoading(false);
  };

  const getDirtieUserId = (uid: string) => {
    // TODO hit api to get user ID
    // TODO create user from user creation in firebase
    return 'DEBUG_ID';
  };

  React.useEffect(() => {
    const existingAuth = uiAuth.AuthUI.getInstance();
    const fbUI = existingAuth || new uiAuth.AuthUI(auth);
    setFbUI(fbUI);
    fbUI.start('#firebasesui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: onSignInSuccess,
        uiShown: onFbUiLoaded,
      },
      signInFlow: 'popup',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
      ]
    });
  }, []);

  //
  // DEBUG - link this to actual login inputs later
  // props.setUserCb(TryLogin({ 
  //   username: 'testuser', 
  //   password: 'testpw' })
  // );

  // React.useEffect(() => {
  //   async function login() {
  //     const user = await TryLogin({ 
  //       username: 'testuser', 
  //       password: 'testpw' });

  //     if (user) {
  //       props.setUserCb(user);
  //     }
  //   };
  //   login();
  // }, []);
  return (
    <section>
      <h1>Let's Get Dirtie</h1>
      <div id="firebasesui-auth-container"></div>
      { isLoading ? 
      <div id="loader">Loading...</div>
      : '' }
    </section>
  );
}
