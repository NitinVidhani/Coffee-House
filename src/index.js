import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateProvider.js";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider> 
  </BrowserRouter>,
  document.getElementById("root")
);
