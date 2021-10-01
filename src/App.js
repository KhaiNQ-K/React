import React from 'react';
import { Route, Switch } from 'react-router';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout, CustomerLayout } from './components/Layout';
import LoginPage from './features/auth/pages/LoginPage';
function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>
      <Route path="/">
        <CustomerLayout />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
