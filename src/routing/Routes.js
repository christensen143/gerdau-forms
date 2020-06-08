import React from 'react';

import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import CranePreInspection from '../pages/CranePreInspection/CranePreInspection';
import Home from '../pages/Home/Home';
import MobileEquipmentInspection from '../pages/MobileEquipmentInspection/MobileEquipmentInspection';
import TapeMeasureRecord from '../pages/TapeMeasureRecord/TapeMeasureRecord';
import UserAdmin from '../pages/UserAdmin/UserAdmin';

import Login from '../components/Login/Login';
import ResetPassword from '../components/ResetPassword/ResetPassword';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute
        path="/tapemeasurerecord"
        exact
        component={TapeMeasureRecord}
      />
      <PrivateRoute
        path="/mobileequipmentinspection"
        exact
        component={MobileEquipmentInspection}
      />
      <PrivateRoute
        path="/craneinspection"
        exact
        component={CranePreInspection}
      />
      <PrivateRoute path="/useradmin" exact component={UserAdmin} />
      <PublicRoute restricted={true} path="/login" exact component={Login} />
      <PublicRoute
        restricted={true}
        path="/login/reset"
        exact
        component={ResetPassword}
      />
    </Switch>
  );
}
