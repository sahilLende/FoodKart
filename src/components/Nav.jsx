import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import store from "../redux/store/store";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

export default function Nav() {
  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
  };
  const goToMenu = () => {
    history.push("/");
  };
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <Box sx={{ width: "100vw", flexGrow: 1, marginBottom: "5rem" }}>
      <AppBar sx={{ padding: "2px" }} position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodKart
          </Typography>

          <Button onClick={goToCart} color="inherit">
            Cart
            <Typography variant="h5" component="div" sx={{ paddingLeft: 2 }}>
              {cartItems.reduce(
                (acc, currentItem) => acc + currentItem.count,
                0
              )}
            </Typography>
          </Button>

          <Button onClick={goToMenu} color="inherit">
            Menu
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
