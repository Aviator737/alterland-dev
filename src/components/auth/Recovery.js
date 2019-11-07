import React,{ Component } from 'react';

class Recovery extends Component{
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
        
        return(
            <>
                <p>Здесь ничего нет <span role="img" aria-label="">💩</span></p>
                <p>Восстановить пароль пока что нельзя</p>
            </>
        )
    }
}

export default Recovery;
