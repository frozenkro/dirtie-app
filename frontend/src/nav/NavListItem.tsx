import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface NavItemProps {
  key: string;
  title: string;
  onClickCb: CallableFunction;
  icon: React.ReactNode;
}

export const NavListItem = function(props: NavItemProps) {
  return (
    <ListItemButton onClick={(_event) => props.onClickCb(props.title)}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItemButton>
  );
}
