import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form, Input} from 'semantic-ui-react';
/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class CreateAccountPage extends Component {

    /*
    State is how specific values are stored when they are changed. It belongs to the
    class itself, and can be called by the notation this.state.data.variable.
     */
    state = {
        data: {
            username: "",
            password: "",
            name: ""
        }
    };



    /* This is the most basic onChange method. It can be used for basic functionality like when you change
    a text field or select something from a dropdown. If you need more functionality, you can create another
    method below that follows the same pattern but does more. */

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]:e.target.value}
        });

    submit = e => {
        console.log(this.state.data.name);
        console.log(this.state.data.username);
        console.log(this.state.data.password);
    }

    render() {
        return (
            <div>
                <h1>Create Account Page</h1>
                <Form onSubmit = {this.submit}>
                    <Form.Field>
                        <Input placeholder = "Input Name"
                        onChange={this.onChange}
                        name = "name"
                        value = {this.state.data.name}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder = "Create Username"
                        onChange = {this.onChange}
                        name = "username"
                        value = {this.state.data.username}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder = "Create Password"
                        onChange = {this.onChange}
                        name = "password"
                        value = {this.state.data.password}/>
                    </Form.Field>
                    <Form.Button>Create Account</Form.Button>
                </Form>
            </div>
        )
    }
}

export default CreateAccountPage;