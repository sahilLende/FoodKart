import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { itemCartActions } from "../redux/Cart/cartItemsSlice";
function Cart({ name, id, price, count }) {
  const dispatch = useDispatch();
  const increaseItem = () => {
    dispatch(itemCartActions.incItemCount({ id: id, count: 1 }));
  };
  const decreaseItem = () => {
    if (count === 1) {
      dispatch(itemCartActions.removeItem(id));
    } else {
      dispatch(itemCartActions.decItemCount({ id: id, count: 1 }));
    }
  };
  return (
    <Card
      sx={{
        height: "auto",
        maxHeight: "250px",
        width: "10vw",
        minWidth: "150px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h9" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={increaseItem} size="small">
          +
        </Button>
        <div>{count}</div>
        <Button onClick={decreaseItem} size="small">
          -
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cart;
