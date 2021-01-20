import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./index.css";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        {/* Protected route for admin dashboard '/admin' */}
        <Route path="/admin">
          <Admin />
        </Route>
        {/* Protected route for user */}

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
