import { Fragment, useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav";
import "./App.css";
import Menu from "./components/Menu";

import { Route, Switch } from "react-router-dom";
import Billing from "./pages/Billing";
import { useDispatch } from "react-redux";
import { menuActions } from "./redux/Menu/menu-slice";

function App() {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const fetchMenuHandler = useCallback(async () => {
    setError(null);
    /*  const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fee9fbe081mshd3488b8651f802fp12ad3ajsn97ada386d5c7",
        "X-RapidAPI-Host": "burgers-hub.p.rapidapi.com",
      },
    };*/

    try {
      const response = await fetch(
        "https://foodkart-2ccaa-default-rtdb.firebaseio.com/menuItems.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();
      console.log(data);
      dispatch(menuActions.setMenu(data));
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    console.log("effect ran");
    fetchMenuHandler();
  }, [fetchMenuHandler]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Menu error={error} />
        </Route>
        <Route path="/cart" exact>
          <Billing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
