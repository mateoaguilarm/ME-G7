
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       App 💻
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* // simplified own */}
          <Route path="/about" component={ About }/>

          <Route path="/users">
            <Users />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// simplified own
const Home = () => {return <h2>Home</h2>;}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}