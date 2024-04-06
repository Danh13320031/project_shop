import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register/Register.jsx';

// Styled MUI
const BoxCom = styled(Box)({
  flexGrow: 1,
});
const CodeIconCom = styled(CodeIcon)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));
const TypographyCom = styled(Typography)({
  flexGrow: 1,
});
const LinkCom = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
});
const NavLinkCom = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
});

// Component
function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false, { reason: String });
  };

  return (
    <BoxCom>
      <AppBar position="static">
        <Toolbar>
          <CodeIconCom />

          <TypographyCom variant="h6">
            <LinkCom to="/">EZ Shop</LinkCom>
          </TypographyCom>

          <NavLinkCom to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLinkCom>

          <NavLinkCom to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLinkCom>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog onClose={handleClose} open={open} aria-braillelabel="form-dialog-title">
        <DialogContent>
          <Register />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </BoxCom>
  );
}

export default Header;
