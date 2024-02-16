import * as React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Logo = styled.img`
  margin-left: ${({ isMobile }) => (isMobile ? "10px" : "30%")};
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 10px;
`;
const MenuComponent = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(0 , 0 , 0 , 0.1)", marginBottom: "2em" }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Logo src="img/logo.png" alt="Logo" isMobile={isMobile} />
          </Typography>
          {isMobile && (
            <>
              <StyledIconButton
                size="large"
                edge="start"
                color="success"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={handleClick}
              >
                <MenuIcon />
              </StyledIconButton>
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
          )}{" "}
          {!isMobile && (
            <>
              <Button
                style={{ fontSize: "100%", marginRight: "3%", color:'green', fontWeight:'bold' }}
                color="primary"
              >
                Como fazer /
              </Button>
              <Button
                style={{ fontSize: "100%", marginRight: "3%", color:'green', fontWeight:'bold' }}
                color="primary"
              >
                Ofertas /
              </Button>
              <Button
                style={{ fontSize: "100%", marginRight: "3%", color:'green', fontWeight:'bold' }}
                color="primary"
              >
                Depoimentos /
              </Button>
              <Button
                style={{ fontSize: "100%", marginRight: "3%", color:'green', fontWeight:'bold' }}
                color="primary"
              >
                Videos /
              </Button>
              <Button
                style={{ fontSize: "100%", marginRight: "3%", color:'green', fontWeight:'bold' }}
                color="primary"
              >
                Meu carrinho
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MenuComponent;
