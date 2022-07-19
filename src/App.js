import react from 'react';
import logo from './logo.svg';
import Login from "./components/login/Login";
import Main from './components/main/Main';
import PrivateRoute from './PrivateRoute'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NotFound from './notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
