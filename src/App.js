import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import CreateAccountPage from "./components/pages/CreateAccountPage";
import DashboardPage from "./components/pages/DashboardPage";
import './App.css';
import TripComponent from "./components/TripComponent";
import AddTripPage from "./components/pages/AddTripPage";
import NewTripPage from "./components/pages/NewTripPage";
import ExistingTripPage from "./components/pages/ExistingTripPage";
import ProfileComponent from "./components/ProfileComponent";


const App = ({location}) => (
    <div className = "ui container">
        <Route location={location} path="/" exact component = {LoginPage} />
        <Route location={location} path="/createAccount" exact component = {CreateAccountPage}/>
        <Route location={location} path="/dashboard" exact component = {DashboardPage}/>
        <Route location={location} path="/tripComponent" exact component = {TripComponent}/>
        <Route location={location} path="/addTrip" exact component = {AddTripPage}/>
        <Route location={location} path="/newTrip" exact component = {NewTripPage}/>
        <Route location={location} path="/existingTrip" exact component = {ExistingTripPage}/>
        <Route location={location} path="/profile" exact component = {ProfileComponent}/>
    </div>
);

export default App;
