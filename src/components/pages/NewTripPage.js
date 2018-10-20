import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, Button } from 'semantic-ui-react'
import HeaderComponent from "./../HeaderComponent";


/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class NewTripPage extends Component {

    render() {
        return (
            <div>
                <HeaderComponent name = "New Trip"/>
                <Form>
                    <Form.Field>
                        <Input placeholder = "Trip Name"/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder = "Location"/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder = "Begin Date"/>
                    </Form.Field>
                    <Button type="submit">Create Trip</Button>
                </Form>
            </div>
        )
    }
}

export default NewTripPage;