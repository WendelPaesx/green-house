import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function MenuComponent() {
  const isMobile = useMediaQuery('(max-width:800px)');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0 , 0 , 0 , 0.1)", marginBottom: '2em'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            <img style={{marginLeft: isMobile ? '10px' : '30%'}} src="img/logo.png" alt="Logo" />
          </Typography>
          {isMobile ? (
            <>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
             
             <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               sx={{ ml: 2 }}
               onClick={handleClick}
             >
               <MenuIcon />
             </IconButton>
             <Menu
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={handleClose}
             >
               <MenuItem onClick={handleClose}>Como fazer</MenuItem>
               <MenuItem onClick={handleClose}>Ofertas</MenuItem>
               <MenuItem onClick={handleClose}>Depoimentos</MenuItem>
               <MenuItem onClick={handleClose}>Videos</MenuItem>
               <MenuItem onClick={handleClose}>Meu carrinho</MenuItem>
             </Menu>
          
             </>
          ) : (
            <>
              <Button style={{fontSize:'100%', marginRight:'3%'}} color="primary">Como fazer   /</Button>
              <Button style={{fontSize:'100%', marginRight:'3%'}} color="primary">Ofertas   /</Button>
              <Button style={{fontSize:'100%', marginRight:'3%'}} color="primary">Depoimentos /</Button>
              <Button style={{fontSize:'100%', marginRight:'3%'}} color="primary">Videos  /</Button>
              <Button style={{fontSize:'100%', marginRight:'3%'}} color="primary">Meu carrinho</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
