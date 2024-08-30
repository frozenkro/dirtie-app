import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { main } from '../../wailsjs/go/models';
import { GetDeviceList } from '../../wailsjs/go/main/App';
import { useAuth } from '../hooks/useAuth';

interface IDeviceListProps {
  configCb: CallableFunction;
}

export default function DeviceList(props: IDeviceListProps) {
  const [devices, setDevices] = React.useState<main.Device[]>();
  //
  // TODO this should be `as main.User` but the generated ts models 
  // aren't getting properties from the go structs
  const { user } = useAuth();

  React.useEffect(() => {
    async function getDevices() {
      const devices = await GetDeviceList((user as main.User).userId);
      setDevices(devices);
    };
    getDevices();

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
        DEVICES LRORMEM ISPSUM
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
