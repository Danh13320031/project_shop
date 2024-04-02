import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const BoxCom = styled(Box)({
  flexGrow: 1,
});

const CodeIconCom = styled(CodeIcon)(({ theme }) => ({
  flexGrow: theme.spacing(2),
}));

const NavLinkAndLinkCom = styled(
  NavLink,
  Link
)({
  color: 'white',
  textDecoration: 'none',
});

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BoxCom>
      <AppBar position="static">
        <Toolbar>
          <CodeIconCom />

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLinkAndLinkCom to="/">EZ Shop</NavLinkAndLinkCom>
          </Typography>

          <NavLinkAndLinkCom to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLinkAndLinkCom>

          <NavLinkAndLinkCom to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLinkAndLinkCom>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open} aria-braillelabel="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </BoxCom>
  );
}

export default Header;
