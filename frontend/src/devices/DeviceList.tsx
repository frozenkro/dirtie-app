import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { main } from '../../wailsjs/go/models';
import { GetDeviceList, Greet } from '../../wailsjs/go/main/App';
import { UserContext } from '../App';

interface IDeviceListProps {
  configCb: CallableFunction;
}

export default function DeviceList(props: IDeviceListProps) {
  const [devices, setDevices] = React.useState<main.Device[]>();
  const [greeting, setGreeting] = React.useState('Not Greeted yet');
  //
  // TODO this should be `as main.User` but the generated ts models 
  // aren't getting properties from the go structs
  const user = React.useContext(UserContext) as any; 

  React.useEffect(() => {
    async function getDevices() {
      const devices = await GetDeviceList(user.id);
      setDevices(devices);
    };
    getDevices();


    async function getGreeting() {
      const g = await Greet("TEST");
      setGreeting(g);
    }
    getGreeting();
      
  }, []);

  return <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        {greeting}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        </Paper>
      </Grid>
    </Grid>
  </>
}
