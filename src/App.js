import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import CreateAccountPage from "./components/pages/CreateAccountPage";
import DashboardPage from "./components/pages/DashboardPage";
import './App.css';
import TripComponent from "./components/TripComponent";


const App = ({location}) => (
    <div className = "ui container">
        <Route location={location} path="/" exact component = {LoginPage} />
        <Route location={location} path="/createAccount" exact component = {CreateAccountPage}/>
        <Route location={location} path="/dashboard" exact component = {DashboardPage}/>
        <Route location={location} path="/tripComponent" exact component = {TripComponent}/>
    </div>
);

export default App;
