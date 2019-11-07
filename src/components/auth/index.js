import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './auth.scss';

import { validateForm, validateInput } from "../../helpers/validate";
import auth from "../../services/userService";

import Signup from './Signup';
import Login from './Login';
import Recovery from './Recovery';
import Logout from './Logout';

class Auth extends Component{
    state = {
        data: { username: '', email: '', password: '' },
        errors: {},
        primaryColor: '255, 67, 139'
    }

    schema = {
        username: {
            required: true,
            regex: /[a-zA-Z0-9_]+/,
            length: [3,16]
        },
        email: {
            required: true,
            isEmail: true
        },
        password: {
            required: true,
            length: [3]
        }
    };

    handleChange = ({ currentTarget: input }) => {

        const data = { ...this.state.data };
        data[input.name] = input.value;
        
        const errors = { ...this.state.errors };
        const errorMessage = validateInput( input, this.schema );

        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        this.setState({ data, errors: errors || {} });
    };

    validateAll(data){
        const errors = validateForm( data, this.schema);
        this.setState({errors: errors || {}});
        return errors? false : true;
    }

    doLogin = async(e) =>{
        e.preventDefault();
        const data = {username: this.state.data.username, password: this.state.data.password}
        if(this.validateAll(data)){
            try{
                await auth.login(data);
                const { state } = this.props.location;
                window.location = state? state.from.pathname : "/";
            }catch(ex){
                if(ex.response && ex.response.status === 400){
                    const errors = {...this.state.errors};
                    errors.username = ex.response.data;
                    this.setState({ errors });
                }
            }
        }
    }

    doSignup = async(e) =>{
        e.preventDefault();
        const data = this.state.data;
        if(this.validateAll(data)){
            try{
                await auth.signup(data);
                window.location = "/";
            }catch(ex){
                if(ex.response && ex.response.status === 400){
                    const errors = {...this.state.errors};
                    errors.username = ex.response.data;
                    this.setState({ errors });
                }
            }
        }
    }

    doRecovery(e){
        e.preventDefault();
        if(this.validateAll()){}
    }
    

    render(){

        const { primaryColor, data, errors } = this.state;

        return(
            <CSSTransition in={true} appear={true} timeout={400} classNames='auth-fade' unmountOnExit>
            <div className="auth">
                <div className="auth-form-wrapper">

                    <Switch>
                        <Route path="/signup">
                            <Signup data={ data } errors={ errors } primaryColor={ primaryColor } handleSubmit={ this.doSignup } handleChange={ this.handleChange } />
                        </Route>
                        <Route path="/login">
                            <Login component={ Login } data={ data } errors={ errors } primaryColor={ primaryColor } handleSubmit={ this.doLogin } handleChange={this.handleChange} />
                        </Route>
                        <Route path="/recovery">
                            <Recovery component={ Recovery } data={ data } errors={ errors } primaryColor={ primaryColor } handleSubmit={ this.doRecovery } handleChange={this.handleChange} />
                        </Route>
                        <Route path="/logout" component={ Logout } />
                    </Switch>

                </div>
            </div>
            </CSSTransition>
        )
    }
}

export default Auth;
