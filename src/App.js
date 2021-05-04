import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomeView from './views/HomeView/HomeView';
import AchievementsView from './views/AchievementsView/AchievementsView';
import ShopView from './views/ShopView/ShopView';

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
      
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={["/home", "/"]} component={ HomeView } />
            <Route exact path="/achievements" component={ AchievementsView } />
            <Route exact path="/shop" component={ ShopView } />
          </Switch>
        </BrowserRouter>
      
    );
  }
}
