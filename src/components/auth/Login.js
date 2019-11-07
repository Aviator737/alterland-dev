import React,{ Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import auth from '../../services/userService';

import Input from '../common/input';

class Login extends Component{
    state = {
        handleSubmit: this.props.handleSubmit,
        handleChange: this.props.handleChange,
        primaryColor: this.props.primaryColor
    }

    render(){

        if(auth.getCurrentUser()) return <Redirect to="/"/>;

        //these will not be updated if parent state will change
        const { handleChange, handleSubmit, primaryColor } = this.state;

        //these will be updated if parent state will change
        const { data, errors } = this.props;

        return(
            <Fragment>
                <h3>Рады снова видеть вас
                <TransitionGroup component={null}>
                    <CSSTransition appear={true} timeout={2000} classNames='tada' key='tada'><span role="img" aria-label="" style={{ fontSize: '28px'}}>😊</span></CSSTransition>
                </TransitionGroup>
                </h3>
                <TransitionGroup component='form' autoComplete="off" onSubmit={ handleSubmit }>
                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='login'> 
                    <Input name='username' type='text' value={ data.username } onChange={ handleChange } error={ errors.username } placeholder='Ник' delay='0.1s'/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='password'>
                    <Input name='password' type='password' value={data.password} onChange={ handleChange } error={ errors.password } placeholder='Пароль'delay='0.2s'/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='submit'>
                    <input type='submit' className='form-submit' style={{transitionDelay: '0.3s', backgroundColor: `rgb(${primaryColor})`}} value="Готово"/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-fade' key='footer'>
                    <div className="auth-footer" style={{transitionDelay: '0.6s'}}>
                        <p>Нет аккаунта? 
                            <Link to='/signup'> Регистрация</Link>
                        </p>
                    </div>
                </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

export default Login;
