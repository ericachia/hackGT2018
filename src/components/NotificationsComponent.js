import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Card, Icon} from 'semantic-ui-react'
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

class NotificationsComponent extends Component {

    state = {
        data: [],
        payment: []
    }

    componentDidMount = () => {
        const tripName = this.props.history.location.state.tripName;
        const userId = this.props.history.location.state.userId;
        fetch("https://skilful-courage-220001.appspot.com/transaction?tripName=" + tripName).then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                });
                let payment = [];
                for(let i = 0; i < this.state.data.length; i++) {
                    if(this.state.data[i].user_id !== userId) {
                        payment.push(this.state.data[i]);
                    }
                }
                console.log(payment);
        });
    }

    render() {
        const data = [{name: "Erica Chia", amt: "$40.53"}, {name: "Patricia Ray", amt: "$32.43"}];
        return (
            <div>
                <HeaderComponent name = "PAYMENTS DUE" id = {this.props.history.location.state.userId}/>

                <Card.Group centered data={"data"}>
                    {data.map(el => <Card name = {el} onClick={this.onClick}>
                        <Card.Content>
                            <Card.Header>{el.name}</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Card.Meta>Amount Owed:</Card.Meta>
                            <Card.Description>{el.amt}</Card.Description>
                        </Card.Content>

                    </Card>)}
                </Card.Group>


            </div>
        )
    }
}

export default NotificationsComponent;