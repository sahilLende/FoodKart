import React from "react";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { itemCartActions } from "../redux/Cart/cartItemsSlice";

function Billing() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleEmptyKart = (event) => {
    event.stopPropagation();
    dispatch(itemCartActions.clearCart([]));
  };
  return cartItems.length > 0 ? (
    <>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {cartItems.map((item) => (
          <Cart
            name={item.name}
            id={item.id}
            key={item.id}
            price={item.price}
            count={item.count}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          Total=
          {cartItems.reduce(
            (acc, currentItem) => acc + currentItem.count * currentItem.price,
            0
          )}
        </h1>
        <Button onClick={handleEmptyKart} variant="contained">
          Empty Cart
        </Button>
      </div>
    </>
  ) : (
    <h1>Empty cart</h1>
  );
}

export default Billing;
