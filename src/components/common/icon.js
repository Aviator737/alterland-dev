import React,{Component} from 'react';

import { ReactComponent as Book } from '../../assets/images/icons/book.svg';
import { ReactComponent as Cart } from '../../assets/images/icons/cart.svg';
import { ReactComponent as Download } from '../../assets/images/icons/download.svg';
import { ReactComponent as Gavel } from '../../assets/images/icons/gavel.svg';
import { ReactComponent as Lock } from '../../assets/images/icons/lock.svg';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';

const icons = {
    book:       <Book viewBox="0 1 24 24"/>,
    cart:       <Cart viewBox="0 1 24 24"/>,
    download:   <Download viewBox="0 2 24 24"/>,
    gavel:      <Gavel viewBox="0 0 24 24"/>,
    lock:       <Lock viewBox="1 1 24 24"/>,
    star:       <Star viewBox="0 0 24 24"/>
}

class Icon extends Component{
    render(){
        return(
            icons[this.props.icon] || ''
        )
    }
}

export default Icon
