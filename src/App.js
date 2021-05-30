import React  from "react";
import './App.scss';
import Employees from './components/Employees/Employees';
import EmployeesBirth from './components/EmployeesBirth/EmployeesBirth';
import {connect} from 'react-redux';

const App = props => {

  return (
    <div className="App">
      <Employees 
        addBirthday = {props.createBirthArr}
        removeBirthday = {props.removeBirthArr}
        birthArray = {props.newBirthArray}
      />
      <EmployeesBirth 
        birthArray = {props.newBirthArray}
      />
    </div>
  );
}

const createBirthArr = employee => {
  return {
    type : 'ACTIVE',
    payload : employee
  }
}
const removeBirthArr = employee => {
  return {
    type : 'NOT-ACTIVE',
    payload : employee
  }
}

const mapDispatchToProps = {
  createBirthArr,
  removeBirthArr
}
const mapStateToProps = state => {
  return {
    newBirthArray : state.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
