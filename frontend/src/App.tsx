import * as React from 'react';
import './App.css';
import Navigation from "./nav/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './login/Login';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#ffc400'
    }
  }
});

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const content = loggedIn ?
      <Navigation />
    : <Login onLogin={setLoggedIn} />

  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </div>
  )
}

export default App
