import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import CreateAccountPage from "./components/pages/CreateAccountPage";
import './App.css';


const App = ({location}) => (
    <div className = "ui container">
        <Route location={location} path="/" exact component = {LoginPage} />
        <Route location={location} path="/createAccount" exact component = {CreateAccountPage}/>
    </div>
);

export default App;
