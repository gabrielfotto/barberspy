import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';


const Routes: React.FC = () => (
   <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/password/forgot" component={ForgotPassword} />
      <Route path="/password/reset" component={ResetPassword} />
      <Route path="/profile" component={Profile} isPrivate />
   </Switch>
);


export default Routes;
