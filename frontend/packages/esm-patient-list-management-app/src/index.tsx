
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

// Importing modules
import PatientList from '../../../esm-patient-list-management-app/src/root.component';
import Appointments from '../../../esm-appointments-app/src/root.component';
import ActiveVisits from '../../../esm-active-visits-app/src/root.component';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/patients" component={PatientList} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/visits" component={ActiveVisits} />
      </Switch>
    </Router>
  );
};

export default App;
