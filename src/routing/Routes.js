import React, { useContext } from 'react';

import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import CranePreInspection from '../pages/CranePreInspection/CranePreInspection';
import Equipment from '../pages/Equipment/Equipment';
import Forbidden from '../pages/Forbidden/Forbidden';
import Home from '../pages/Home/Home';
import MobileEquipmentInspection from '../pages/MobileEquipmentInspection/MobileEquipmentInspection';
import TapeMeasureRecord from '../pages/TapeMeasureRecord/TapeMeasureRecord';
import FormAdmin from '../pages/FormAdmin/FormAdmin';
import UserAdmin from '../pages/UserAdmin/UserAdmin';

import Login from '../components/Login/Login';
import ResetPassword from '../components/ResetPassword/ResetPassword';

import { AuthContext } from '../context/AuthContext';

export default function Routes() {
  const { role } = useContext(AuthContext);
  const isAdmin = () => {
    if (role === 'Admin') {
      return true;
    } else {
      return false;
    }
  };
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
      <PrivateRoute
        path="/useradmin"
        exact
        component={isAdmin ? UserAdmin : Forbidden}
      />
      <PrivateRoute
        path="/formadmin"
        exact
        component={isAdmin ? FormAdmin : Forbidden}
      />
      <PrivateRoute path="/equipment" exact component={Equipment} />
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
