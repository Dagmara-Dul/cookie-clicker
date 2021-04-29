import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.js";
import HomeView from "../views/HomeView/HomeView.js";

// export default function App() {
//   return (
//     <>
//     <Navbar>
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//     </>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
