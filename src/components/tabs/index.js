import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import FullStack from "./fullstack";
import Frameworks from "./frameworks";
import CommandLine from "./commandLine";
import DynamicWeb from "./dynamicWeb";

const Tabs = () => {
  return (
    <div className="tabs-padding">
      <div className="tabs is-centered">
        <ul>
          <li>
            <Link className="is-active" to="/frameworks">
              JavaScript Frameworks
            </Link>
          </li>
          <li>
            <Link to="/fullstack">Node.js/Express Apps</Link>
          </li>
          <li>
            <Link to="/web">Dynamic Browser Apps</Link>
          </li>
          <li>
            <Link to="/cli">Node Command-line Apps</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={"/fullstack"} component={FullStack} />
        <Route path={"/frameworks"} component={Frameworks} />
        <Route path={"/web"} component={DynamicWeb} />
        <Route path={"/cli"} component={CommandLine} />
        <Route path={"/"} component={Frameworks} />
      </Switch>
    </div>
  );
};

export default Tabs;
