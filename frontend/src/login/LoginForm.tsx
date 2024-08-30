import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {
  styled,
} from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 20,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

interface ILoginFormProps {
  loginCb: (email: string, pw: string) => void;
  createAcctCb: (email: string, pw: string, name: string) => void;
}

enum LoginMode {
  SignIn,
  SignUp,
  ForgotPassword
}

type LoginDynamicTextFields = {
  submitBtn: string,
  toggleMode: string,
  toggleTip: string,
}

export default function LoginForm(props: ILoginFormProps) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [loginMode, setLoginMode] = React.useState(LoginMode.SignIn);

  const showName = loginMode === LoginMode.SignUp;
  const showForgotPw = loginMode === LoginMode.ForgotPassword;
  const textFields: LoginDynamicTextFields = loginMode === LoginMode.SignUp ? 
    {
      submitBtn: "Sign Up",
      toggleMode: "Sign In",
      toggleTip: "Already have an account?",
    } : 
    {
      submitBtn: "Sign In",
      toggleMode: "Sign Up",
      toggleTip: "Don't have an account?",
    }
  const handleClickOpen = () => {
    setLoginMode(LoginMode.ForgotPassword);
  };

  const handleClose = () => {
    setLoginMode(LoginMode.SignIn);
  };

  const handleToggleMode = () => {
    if (loginMode === LoginMode.SignUp) {
      setLoginMode(LoginMode.SignIn);
    }
    if (loginMode === LoginMode.SignIn) {
      setLoginMode(LoginMode.SignUp);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    const name = data.get('name')?.toString();

    if (loginMode == LoginMode.SignIn) {
      props.loginCb(email as string, password as string);
    } 
    else if (loginMode == LoginMode.SignUp) {
      props.createAcctCb(email as string, password as string, name as string);
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (loginMode == LoginMode.SignUp) {
      const name = document.getElementById('name') as HTMLInputElement;
      if (!name.value) {
        setNameError(true);
        setNameErrorMessage('Please enter your name');
      } else {
        setNameError(false);
        setNameErrorMessage('');
      }
    }

    return isValid;
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl>
            { showName ? 
              <FormLabel hidden={showName} htmlFor="name">Name</FormLabel> 
            : '' }
            { showName ?
              <TextField
                error={nameError}
                helperText={nameErrorMessage}
                id="name"
                type="name"
                name="name"
                placeholder="Your Name"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={nameError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'name' }}
              /> 
            : '' }
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
              sx={{ ariaLabel: 'email' }}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link
                component="button"
                onClick={handleClickOpen}
                variant="body2"
                sx={{ alignSelf: 'baseline' }}
              >
                Forgot your password?
              </Link>
            </Box>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ForgotPassword open={showForgotPw} handleClose={handleClose} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            { textFields.submitBtn }
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
          {textFields.toggleTip }{' '}
            <span>
              <Link
                onClick={handleToggleMode}
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                { textFields.toggleMode }
              </Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </SignInContainer>
  );
}
