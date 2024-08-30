import './App.css';
import Navigation from "./nav/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './login/Login';
import { useAuth } from './hooks/useAuth';


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

function App() {
  const { user } = useAuth();
  const content = user ?
      <Navigation />
    : <Login />

  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </div>
  )
}

export default App
