import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, Button } from 'semantic-ui-react'
import HeaderComponent from "./../HeaderComponent";
import './LoginPage.css'

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class AddTripPage extends Component {

    render() {
        return (
            <div>
                <HeaderComponent name = "Add Trip"/>
            <Button as ={Link} to = "/newTrip">New Trip</Button>
            <Button>Enter Existing Trip</Button>
            </div>
        )
    }
}

export default AddTripPage;