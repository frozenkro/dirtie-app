import './App.css';
import Navigation from "./nav/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

    return (
        <div id="App">
          <ThemeProvider theme={theme}>
            <Navigation/>
          </ThemeProvider>
        </div>
    )
}

export default App
