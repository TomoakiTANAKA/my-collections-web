import React, {Component} from "react";
import {renderRoutes} from "react-router-config";
import Routes from "../routes";

class Main extends Component {
  render() {
    return(
      <main>
        {renderRoutes(Routes)}
      </main>
    );
  }
}

export default Main;
