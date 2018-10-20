import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, Button } from 'semantic-ui-react'

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class LoginPage extends Component {

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

    onChange = e => {
        this.setState({
            data: {...this.state.data, [e.target.name]:e.target.value}
        });
    }

    createAccount = e =>
        this.props.history.push("/createAccount");

    submit = e => {
        console.log(this.state.data.username);
        console.log(this.state.data.password);
    }



    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <Form onSubmit={this.submit}>
                    <Form.Field>
                        <Input placeholder="username"
                               value = {this.state.data.username}
                               name = "username"
                               onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder="password"
                               value = {this.state.data.password}
                               name = "password"
                               onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Button onClick={this.createAccount}>Create Account</Button>
                    </Form.Field>
                    <Form.Button>Login</Form.Button>
                </Form>
            </div>
        )
    }
}

export default LoginPage;