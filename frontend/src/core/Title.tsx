import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  title: String;
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="white" gutterBottom>
      {props.title}
    </Typography>
  );
}
