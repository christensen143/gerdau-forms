import React from 'react';

import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
// import PrivateRoute from './routing/PrivateRoute';

import CranePreInspection from '../pages/CranePreInspection/CranePreInspection';
import Home from '../pages/Home/Home';
import MobileEquipmentInspection from '../pages/MobileEquipmentInspection/MobileEquipmentInspection';
import TapeMeasureRecord from '../pages/TapeMeasureRecord/TapeMeasureRecord';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute restricted={true} path="/" exact component={Home} />
      <PublicRoute
        path="/tapemeasurerecord"
        exact
        component={TapeMeasureRecord}
      />
      <PublicRoute
        path="/mobileequipmentinspection"
        exact
        component={MobileEquipmentInspection}
      />
      <PublicRoute
        path="/craneinspection"
        exact
        component={CranePreInspection}
      />
    </Switch>
  );
}
