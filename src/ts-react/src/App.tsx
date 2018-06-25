import * as React from 'react'
import { Route, BrowserRouter as Router, Switch, HashRouter, Link } from 'react-router-dom';
import { router } from './routes'
export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
          <Switch>
            {router.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.main}
              />
            ))}
          </Switch>
        </div>
      </Router>
    )
  }
}
