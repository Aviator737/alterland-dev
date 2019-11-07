import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/icon';
import auth from '../../services/userService';

class Menu extends Component{
    state = {
        menuTop: [
            {
                id: 1,
                title: 'Личный кабинет',
                active: false,
                icon: 'lock',
                link: '/login'
            },
            {
                id: 2,
                title: 'Скачать лаунчер',
                active: false,
                icon: 'download',
                link: 'https://drive.google.com/file/d/1Yp1r5R_BbS4-n-9dTkLIqLsaHwVAj1uF/view?usp=sharing',
                color: '#ff438b'
            },
        ],
        menuBottom: [
            {
                id: 1,
                title: 'Как играть',
                active: false,
                icon: 'book',
                link: ''
            },
            {
                id: 2,
                title: 'Магазин',
                active: false,
                icon: 'cart',
                link: ''
            },
            {
                id: 3,
                title: 'Правила',
                active: false,
                icon: 'gavel',
                link: '/rules'
            },
            {
                id: 4,
                title: 'Лидеры',
                active: false,
                icon: 'star',
                link: ''
            },
    
        ]
    }

    componentDidMount(){
        const user = auth.getCurrentUser();
        if(user){
            const menuTop = [...this.state.menuTop];
            menuTop[0].title = user.username+' (Выход)';
            menuTop[0].icon = '';
            menuTop[0].link = '/logout'
            this.setState({ menuTop });
        }
    }

    render(){
        const { menuTop, menuBottom } = this.state;
        const align = this.props.align;
        let menu;

        align === 'bottom'? menu = menuBottom : menu = menuTop;
        
        return(
            <nav className={align}>
                <ul>
                    { menu.map((i) => 
                        <li key={i.id} style={{color: `${ i.color? `rgb(${this.props.primaryColor})` : null }`}}>
                            
                            {/^https?:\/\//.test(i.link)
                            ? <a href={i.link} target="_blank">
                                <span className="svg-icon_menu" style={{fill: `${ i.color? `rgb(${this.props.primaryColor})` : null }`}}>
                                    <Icon icon={i.icon}/>
                                </span>
                                {i.title}
                            </a>
                            : <Link to={i.link}>

                                <span className="svg-icon_menu" style={{fill: `${ i.color? `rgb(${this.props.primaryColor})` : null }`}}>
                                    <Icon icon={i.icon}/>
                                </span>
                                
                                {i.title}

                            </Link>
                            }
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}

export default Menu;
