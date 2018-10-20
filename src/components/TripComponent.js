import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Image, Tab, Label, List } from 'semantic-ui-react'
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
        data: {
            username: "",
            password: ""
        }
    };


    componentDidMount = () => {
        console.log(this.props.history.location.state.name);
    }



    render() {
        const data = [{name: "Caitlin", des: "Uber", amt: "$10.60"}, {name: "Erica", des: "Hotel", amt: "$37.54"}];
        const panes = [
            { menuItem: 'Transactions', render: () =>
                <Tab.Pane>
                    <List divided relaxed>
                    {data.map(el =>
                        <List.Item>
                            <List.Content>
                                <List.Header>{el.name}</List.Header>
                                <List.Description>{el.des}</List.Description>
                                <List.Description>{el.amt}</List.Description>
                            </List.Content>
                        </List.Item>
                    )}
                    </List>
                </Tab.Pane> },
            { menuItem: 'Summary', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> }
        ]
        return (
            <div>
                <HeaderComponent name = {this.props.history.location.state.name}/>
                <Image src={MapFullIcon}/>
                <Tab panes = {panes} />
            </div>
        )
    }
}

export default TripComponent;