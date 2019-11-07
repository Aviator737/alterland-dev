import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Menu from './menu';
import Slider from './slider';

import { ReactComponent as Plane } from '../../assets/images/landing/plane.svg';
import { ReactComponent as FilledTriangle } from '../../assets/images/landing/fill.svg';
import { ReactComponent as Triangle } from '../../assets/images/landing/wofill.svg';

import './landing.scss';
import './slider.scss';

class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      colors: {primary: '255, 67, 139', secondary: '255, 189, 203'}
    }
    this.onImageChange = this.onImageChange.bind(this)
  }

  onImageChange(colors){
    this.setState({colors: colors})
  }

  render(){
    let primaryColor = this.state.colors.primary, secondaryColor = this.state.colors.secondary
    return(
      <div className="landing">
        <div className="container">

          <TransitionGroup component={null}>
            <CSSTransition in={true} timeout={1500} classNames='fade' key={secondaryColor}>
              <div>
                <Triangle className="svg-triangle svg-triangle_center" style={{fill: `rgb(${secondaryColor})`}}/>
                <FilledTriangle className="svg-triangle" style={{fill: `rgb(${secondaryColor})`}}/>
              </div>
            </CSSTransition>
          </TransitionGroup>

          <Plane className="image-vehicle"/>

          <Slider onImageChange={this.onImageChange}/>

          <Menu align="top" primaryColor={primaryColor}/>
          <Menu align="bottom" />

          <div className="hero">
            <h1>A<span style={{letterSpacing: '-0.7rem'}}>L</span>TER<span style={{letterSpacing: '0.7rem'}}>L</span>A<span style={{letterSpacing: '-0.7rem'}}>N</span>D</h1>

            <h2>role-play minecraft</h2>

            <Link
              to={{
                pathname: '/signup',
                state:{
                  primaryColor: primaryColor
                }
              }}
              className="hero-button"
              style={{backgroundColor: `rgb(${primaryColor})`, filter: `drop-shadow(0 12px 102px rgba(${primaryColor},0.57))`}}
            >
                Начать играть
            </Link>

          </div>

        </div>
      </div>
    )
  }
}
  
export default Landing;
