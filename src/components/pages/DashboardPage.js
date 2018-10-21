import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, Image, Card } from 'semantic-ui-react'
import HeaderComponent from "../HeaderComponent";
import MapIcon from "../img/map.png";

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class DashboardPage extends Component {

    /*
    State is how specific values are stored when they are changed. It belongs to the
    class itself, and can be called by the notation this.state.data.variable.
     */
    state = {
        data: []
    };

    onClick = (e, {name}) => {
        this.props.history.push({
            pathname: "/tripComponent",
            state: {name: name, userId: this.props.history.location.state.userId}
        });
    }

    componentDidMount = () => {
        const userId = this.props.history.location.state.userId;
        fetch("https://skilful-courage-220001.appspot.com/trip?userID=" + userId).then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                });
                console.log(this.state.data);
            });
    };

    render() {
        return (
            <div>
                <HeaderComponent name = "MY TRIPS" id = {this.props.history.location.state.userId}/>
                <Card.Group itemsPerRow={4}>
                    {this.state.data.map(el => <Card name = {el.trip_name} onClick={this.onClick}>
                        <Image src={MapIcon}/>
                        <Card.Content>
                            <Card.Header>{el.trip_name}</Card.Header>
                        </Card.Content>
                    </Card>)}
                </Card.Group>
            </div>
        )
    }
}

export default DashboardPage;