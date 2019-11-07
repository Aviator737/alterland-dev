import React,{Component} from 'react';

import Sidebar from './sidebar';

import './dashboard.scss';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Sidebar>
                    
                </Sidebar>
            </div>
        )
    }
}

export default Dashboard
