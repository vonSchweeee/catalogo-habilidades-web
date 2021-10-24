import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '../pages/Auth';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  )
}