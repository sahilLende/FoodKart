import React, { useCallback, useEffect } from "react";
import foodItem from "../fooditem";
import FoodItems from "./FoodItems";
import { useDispatch, useSelector } from "react-redux";

function Menu({ error }) {
  const currentMenu = useSelector((state) => state.menuSlice);
  return (
    <div>
      <section
        style={{
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {!error && currentMenu && currentMenu.length > 0
          ? currentMenu.map((item) => (
              <FoodItems
                key={item.id}
                name={item.name}
                isVeg={item.veg}
                price={item.price}
                id={item.id}
              />
            ))
          : !error && <h1>NO ITem FOund</h1>}
        {error && <h1 style={{ textAlign: "center" }}>{error}</h1>}
      </section>
    </div>
  );
}

export default Menu;
