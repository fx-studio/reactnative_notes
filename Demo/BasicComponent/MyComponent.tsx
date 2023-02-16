import React, { Component } from "react";
import { Text } from "react-native";

class MyComponent extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
        }
    };

    // life cycle
    componentDidMount() {
        console.log("MyComponent -> componentDidMount");
    }

    componentDidUpdate(prevProps){
        console.log("MyComponent -> componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("MyComponent -> componentWillUnmount");
    }

    // render
    render(){
        return(<Text>Xin chào, {this.state.name}</Text>);
    }
}

export default MyComponent;