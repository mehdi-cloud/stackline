import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from './logo.jpeg'
import './NavBar.css'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar className={'bar'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div className='logo'>
              <img src={logo} />
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}