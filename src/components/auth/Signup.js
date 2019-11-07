import React,{ Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Input from '../common/input';

class Signup extends Component{
    state = {
        handleSubmit: this.props.handleSubmit,
        handleChange: this.props.handleChange,
        primaryColor: this.props.primaryColor
    }

    render(){
        //these will not be updated if parent state will change
        const { handleChange, handleSubmit, primaryColor } = this.state;

        //these will be updated if parent state will change
        const { data, errors } = this.props;

        console.log(this.state)
        return(
            <Fragment>
                <h3>Приветствуем
                <TransitionGroup component={null}>
                    <CSSTransition appear={true} timeout={2000} classNames='handwave' key='handwave'><span role="img" aria-label="">👋</span></CSSTransition>
                </TransitionGroup>
                </h3>
                <p>Давайте для начала зарегистрируем вас</p>
                <TransitionGroup component='form' autoComplete="off" onSubmit={ handleSubmit }>
                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='login'> 
                    <Input name='username' type='text' value={ data.username } onChange={ handleChange } error={ errors.username } placeholder='Ник' delay='0.1s'/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='email'>
                    <Input name='email' type='text' value={ data.email } onChange={ handleChange } error={ errors.email } placeholder='Email' delay='0.2s'/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='password'>
                    <Input name='password' type='password' value={data.password} onChange={ handleChange } error={ errors.password } placeholder='Пароль'delay='0.3s'/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-translate' key='submit'>
                    <input type='submit' className='form-submit' style={{transitionDelay: '0.3s', backgroundColor: `rgb(${primaryColor})`}} value="Готово"/>
                </CSSTransition>

                <CSSTransition appear={true} timeout={1500} classNames='auth-fade' key='footer'>
                    <div className="auth-footer" style={{transitionDelay: '0.6s'}}>
                        <p>Уже есть аккаунт? 
                            <Link to='/login'> Вход</Link>
                        </p>
                    </div>
                </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

export default Signup;
