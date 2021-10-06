import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
=======
const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);
>>>>>>> parent of dce41af (added dynamic routing to the menu-items using withRouter)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
<<<<<<< HEAD
        <Route exact path="/shop" component={ShopPage} />
=======
        <Route path="/hats" component={HatsPage} />
>>>>>>> parent of dce41af (added dynamic routing to the menu-items using withRouter)
      </Switch>
    </div>
  );
}

export default App;
