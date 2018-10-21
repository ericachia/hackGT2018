import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Divider, Icon, Card, Segment} from 'semantic-ui-react'
import HeaderComponent from "./HeaderComponent";
import MapIcon from "./img/map.png";


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
        const data = [
            {
                header: "Captial One Credit Card",
                meta: "Payments to Friends In Use",
                description: "****-****-****-12345"
            }
        ];
        return (
            <div>
                <HeaderComponent name = "PROFILE"/>
                <Icon name = "user" size = "massive"/>
                <h1>Erica Chia</h1>
                <Segment>
                    <h3>Payment Information</h3>
                </Segment>
                <Card centered data={"data"}>
                    {data.map(el =>
                    <Card.Content>
                        <Card.Header>{el.header}</Card.Header>
                        <Card.Description>{el.meta}</Card.Description>
                        <Card.Description>{el.description}</Card.Description>
                    </Card.Content>)}
                </Card>
            </div>
        )
    }
}

export default ProfileComponent;