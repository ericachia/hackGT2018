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


    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            <Menu>
                <Menu.Item as = {Link}
                    name='My Trips'
                    to="/dashboard"
                />
                <Menu.Item as = {Link}
                    name='Add Trip'
                           to = "/addTrip"
                />
                <Menu.Item as = {Link}
                    name='My Profile'
                           to = "/dashboard"
                />
            </Menu>
                <Divider></Divider>
            </div>
        )
    }
}

export default HeaderComponent;