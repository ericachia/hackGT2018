import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import HeaderComponent from "./HeaderComponent";
import './pages/LoginPage.css'

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class NotificationsComponent extends Component {

    render() {
        const data = [{name: "Erica Chia", amt: "$40.53"}, {name: "Patricia Ray", amt: "$32.43"}];
        return (
            <div>
                <HeaderComponent name = "Payments Due"/>
                <List divided relaxed>
                    {data.map(el =>
                    <List.Item>
                        <List.Content>
                            <List.Header>{el.name}</List.Header>
                            <List.Description>Amount Due:{el.amt}</List.Description>
                        </List.Content>
                    </List.Item>)}
                </List>
            </div>
        )
    }
}

export default NotificationsComponent;