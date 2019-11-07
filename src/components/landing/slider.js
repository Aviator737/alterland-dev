import React,{Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import image1 from '../../assets/images/landing/slider/slide1.png';
import image2 from '../../assets/images/landing/slider/slide2.png';
import image3 from '../../assets/images/landing/slider/slide-3.png';
import image4 from '../../assets/images/landing/slider/slide-4.png';
import image5 from '../../assets/images/landing/slider/slide-5.png';

class Slider extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      images: [
        {
          src: image1,
          colors: {primary: '255, 67, 139', secondary: '255, 189, 203'},
        },
        {
          src: image2,
          colors: { primary: '0, 150, 135', secondary: '178, 223, 219'},
        },
        {
          src: image3,
          colors: { primary: '3, 169, 244', secondary: '144, 202, 249'},
        },
        {
          src: image4,
          colors: { primary: '103, 58, 183', secondary: '149, 117, 205'},
        },
        {
          src: image5,
          colors: { primary: '239, 83, 80', secondary: '239, 154, 154'},
        }
      ]
    };
  }

  componentDidMount(){
    this.changeImage();
  }

  loadImage(index){
    return new Promise((resolve, reject)=>{
      let image = new Image();
      image.onload = () => {
        resolve();
      };
      image.src = this.state.images[index].src;
      if(image.complete){
        resolve();
      }
    })
  }
  
  changeImage(){
    let nextImage = (this.state.currentImage + 1) % this.state.images.length,
        imageLoadPromise = this.loadImage(nextImage),
        timerPromise = new Promise((resolve, reject)=>{
          setTimeout(()=>{resolve()}, 8000)
        });

    Promise.all([imageLoadPromise, timerPromise]).then(()=>{
      this.setState({ currentImage: nextImage});
      this.props.onImageChange(this.state.images[nextImage].colors);
      this.changeImage();
    })
  }

  render(){
    const {currentImage, images} = this.state
    return(
      <TransitionGroup component={null}>
        <CSSTransition in={true} timeout={1500} classNames='translate' key={currentImage}>
          <div>
            <img src={ images[currentImage].src } alt='' className="slider-img"/>
            <img src={ images[currentImage].src } alt='' className="slider-img_shadow"/>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Slider;
