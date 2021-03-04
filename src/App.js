import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review.js';
import Inventory from './components/Inventory/Inventory.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFount from './components/NotFound/NotFount';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>

          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFount></NotFount>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
