import * as React from 'react';
import Container from '@mui/material/Container';
import ConfigureDevice from './ConfigureDevice';
import DeviceList from './DeviceList';

export default function Devices() {
  const [showConfigPage, setShowConfigPage] = React.useState(false);

  const pageContent = showConfigPage ?
      <ConfigureDevice completeCb={() => setShowConfigPage(false)} />
      : <DeviceList configCb={() => setShowConfigPage(true)} />;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {pageContent}
    </Container>
  );
}
