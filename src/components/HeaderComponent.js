import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Label, Menu, Divider } from 'semantic-ui-react'
import "./Header.css"

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
        const id = this.props.id;
        const goTo = {
            pathname: "/dashboard",
            state: {userId: id}
        }
        const goTo1 = {
            pathname: "/addTrip",
            state: {userId: id}
        }
        const goTo2 = {
            pathname: "/notification",
            state: {userId: id}
        }
        return (
            <div>
                <div id={"heading"}>
                <h1 id={"headerTitle"}>{this.props.name}</h1>
                </div>
            <Menu widths={4}>
                <Menu.Item as = {Link}
                    name='MY TRIPS'
                    to={goTo}
                />
                <Menu.Item as = {Link}
                    name='ADD TRIP'
                           to = {goTo1}
                />
                <Menu.Item as = {Link}
                    name='MY PROFILE'
                           to = "/profile"
                />
                <Menu.Item as = {Link}
                           name="NOTIFICATIONS"
                           to = {goTo2}
                >
                </Menu.Item>
            </Menu>
                <Divider></Divider>
            </div>
        )
    }
}

export default HeaderComponent;