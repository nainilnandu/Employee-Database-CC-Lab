import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/EmployeeLogin';
import Report from './components/EmployeeDetails';
import Signup from './components/EmployeeSignup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/report'>
            <Report />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
