import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApiData from './components/ApiData/ApiData';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/viewdata">
            <ApiData />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
