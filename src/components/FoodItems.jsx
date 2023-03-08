import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemCartActions } from "../redux/Cart/cartItemsSlice";
import { currentItemActions } from "../redux/Cart/currentItem-slice";

function FoodItems({ price, name, isVeg, id }) {
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();
  const handleAddItem = (event) => {
    event.preventDefault();
    dispatch(currentItemActions.setCurrentItem(id));
    //search for id in current items
    const includes = cartItems.find((item) => {
      return item.id === id;
    });
    // if same id exists return already

    includes
      ? console.log("alreadyexists")
      : dispatch(
          itemCartActions.addItem({
            name: name,
            price: price,
            isVeg: isVeg,
            id: id,
            count: 1,
          })
        );
    //if no same id is there  dispatch action
    // if the id === cureentitems[0].id?
  };
  const handleRemoveItem = (event) => {
    event.preventDefault();
    const includes = cartItems.find((item) => {
      return item.id === id;
    });

    includes
      ? dispatch(itemCartActions.removeItem(id))
      : console.log("item does not exits");
  };

  return (
    <Card
      sx={{
        height: "auto",
        maxHeight: "450px",
        width: "30vw",
        minWidth: "300px",
      }}
    >
      <CardContent>
        {/*<CardMedia sx={{ height: 200 }} image={img[0].sm} title={name} />*/}
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>

        <Typography gutterBottom variant="h7" component="div">
          {price}
        </Typography>
        <Typography gutterBottom variant="h9" component="div">
          {isVeg ? "Veg" : "Non-Veg"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddItem} size="medium">
          Add To Cart
        </Button>
        <Button onClick={handleRemoveItem} size="medium">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default FoodItems;
