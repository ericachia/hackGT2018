import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Image, Tab, Label, List, Segment, Button } from 'semantic-ui-react'
import MapFullIcon from "./img/mapFull.png";
import HeaderComponent from "./HeaderComponent";

/*
    Above the render() is where you write you javascript functions for buttons and whatnot
    If you want something to happen right when the page loads, you will use the lifecycle method called
    componentDidMount() {
        add your own code here
    }

    Otherwise, you will just make functions like you normally would for other features
     */

class TripComponent extends Component {

    /*
    State is how specific values are stored when they are changed. It belongs to the
    class itself, and can be called by the notation this.state.data.variable.
     */
    state = {
        data: [],
        names: []
    };

    endTrip = () => {
        this.props.history.push({
            pathname: "/notification",
            state: {tripName: this.props.history.location.state.name, userId: this.props.history.location.state.userId}
        });
    }


    componentDidMount = () => {
        const tripName = this.props.history.location.state.name;
        fetch("https://skilful-courage-220001.appspot.com/transaction?tripName=" + tripName).then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                });
                console.log(this.state.data);
                for(var i  = 0; i < this.state.data.length; i++) {
                    fetch("https://skilful-courage-220001.appspot.com/user?userID=" + this.state.data[i].user_id).then(
                        response => response.json()).then(json => {
                            let nameList = this.state.names;
                            nameList.push(json[0].firstname + " " + json[0].lastname);
                        this.setState({
                            name : nameList
                        })
                        console.log(this.state.name);
                    });
                }
            })
    };


    render() {

        const panes = [
            { menuItem: 'Transactions', render: () =>
                <Tab.Pane>
                    <List divided relaxed>
                    {this.state.data.map((el, index) =>
                        <List.Item>
                            <List.Content>
                                <List.Header>{this.state.names[index]}</List.Header>
                                <List.Description>{el.description}</List.Description>
                                <List.Description>{el.amount}</List.Description>
                            </List.Content>
                        </List.Item>
                    )}
                    </List>
                </Tab.Pane> },
            { menuItem: 'Summary', render: () =>
                    <Tab.Pane>
                       Trip Code: {this.state.data[0].trip_name}
                    </Tab.Pane>
            }
        ]
        return (
            <div>
                <HeaderComponent name = {this.props.history.location.state.name} id = {this.props.history.location.state.userId}/>
                <Image src={MapFullIcon}/>
                <Tab panes = {panes} />
                <Button onClick = {this.endTrip}>End Trip</Button>
            </div>
        )
    }
}

export default TripComponent;