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

class NewTripPage extends Component {

    state = {
        data: {
            trip: ""
        }
    };

    onChange = e => {
        this.setState({
            data: {...this.state.data, [e.target.name]:e.target.value}
        });
    }

    submit = e => {
        const url = "https://skilful-courage-220001.appspot.com/create/trip?user_id=1&amountDue=69&tripName=" + this.state.data.trip;
        console.log(url);
        fetch(url, {
            method: "GET"
        }).then(res => {
            this.props.history.push("/dashboard");
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent name = "NEW TRIP"/>
                <Form onSubmit = {this.submit}>
                    <Form.Field>
                        <Input placeholder = "Trip Name"
                        name = "trip"
                        value = {this.state.data.trip}
                        onChange={this.onChange}/>
                    </Form.Field>
                    <Button type="submit" id={"createTripButton"}>CREATE TRIP</Button>
                </Form>
            </div>
        )
    }
}

export default NewTripPage;