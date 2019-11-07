import React from 'react';

import Menu from './Menu';
import Profile from './Profile';

function Sidebar(params) {
    return(
        <div className="dashboard-sidebar">
            <Menu/>
            <Profile/>
        </div>
    );
}

export default Sidebar;
