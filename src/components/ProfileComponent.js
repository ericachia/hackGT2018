import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Divider, Icon } from 'semantic-ui-react'
import HeaderComponent from "./HeaderComponent";


/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class ProfileComponent extends Component {

    render() {
        return (
            <div>
                <HeaderComponent name = "My Profile"/>
                <Icon name = "user" size = "massive"/>
                <h1>Erica Chia</h1>
                <Divider></Divider>
                <p>Payment Information:</p>
                <p>**** - **** - **** - 3293</p>
            </div>
        )
    }
}

export default ProfileComponent;