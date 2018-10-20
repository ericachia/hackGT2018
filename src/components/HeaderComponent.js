import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Label, Menu, Divider } from 'semantic-ui-react'

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class HeaderComponent extends Component {

    /*
    State is how specific values are stored when they are changed. It belongs to the
    class itself, and can be called by the notation this.state.data.variable.
     */
    state = {
        data: {
            username: "",
            password: ""
        }
    };



    /* This is the most basic onChange method. It can be used for basic functionality like when you change
    a text field or select something from a dropdown. If you need more functionality, you can create another
    method below that follows the same pattern but does more. */

    onClick = (e, {name}) => {
        if(name === "My Trips") {
            console.log("My Trips");
        } else if(name === "Add Trip") {
            console.log("Add Trip");
        } else if(name === "My Profile") {
            console.log("My Profile");
        }
    };



    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            <Menu>
                <Menu.Item
                    name='My Trips'
                    onClick={this.onClick}
                />
                <Menu.Item
                    name='Add Trip'
                    onClick={this.onClick}
                />
                <Menu.Item
                    name='My Profile'
                    onClick={this.onClick}
                />
            </Menu>
                <Divider></Divider>
            </div>
        )
    }
}

export default HeaderComponent;