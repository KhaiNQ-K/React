import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import AddEditPage from './pages/AddEditPage';

function UserFeature(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <ListPage />
      </Route>
      <Route path={`${match.path}/add`} exact>
        <AddEditPage />
      </Route>
      <Route path={`${match.path}/:studentId`} exact>
        <AddEditPage />
      </Route>
    </Switch>
  );
}

UserFeature.propTypes = {};

export default UserFeature;
