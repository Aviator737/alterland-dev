import React, { Component } from 'react';
import auth from "../../services/userService";

class Logout extends Component{
    componentDidMount(){
        auth.logout();
        window.location = "/";
    }

    render(){
        return null;
    }
}

export default Logout;
