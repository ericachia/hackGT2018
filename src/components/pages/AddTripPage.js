import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, Button } from 'semantic-ui-react'
import HeaderComponent from "./../HeaderComponent";
import "./LoginCreateUserPage.css"

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
                <HeaderComponent name = "ADD TRIP"/>
            <Button as ={Link} to = "/newTrip" id={"newTripButton"} size="big" >NEW TRIP</Button>
            <Button as ={Link} to = "/existingTrip" id={"existingTripButton"} size="big">ENTER EXISTING TRIP</Button>
            </div>
        )
    }
}

export default AddTripPage;