import * as React from 'react';
import './App.css';
import Navigation from "./nav/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './login/Login';
import { main } from '../wailsjs/go/models';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#ffc400'
    }
  }
});

export const UserContext = React.createContext<main.User | null>(null);

function App() {
  const [userContext, setUserContext] = React.useState<main.User | null>();
  const content = userContext ?
    <UserContext.Provider value={userContext}>
      <Navigation />
    </UserContext.Provider>
    : <Login setUserCb={(user: main.User) => setUserContext(user)}/>

  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </div>
  )
}

export default App
