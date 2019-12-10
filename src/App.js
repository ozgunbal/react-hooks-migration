import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import store from "./store";
import ApplicationStats from "./ApplicationStats";
import FormDisplay from "./FormDisplay";

const App = () => (
  <div className="container">
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ApplicationStats />

        <FormDisplay />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
