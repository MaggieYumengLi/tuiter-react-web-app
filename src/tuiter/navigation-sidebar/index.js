import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const location = useLocation();
    const {pathname} = location;
    console.log(pathname);
    const parts = pathname.split('/')
    console.log(parts);
    return (
        <div className="list-group">
            <a href ="#" className="list-group-item">Tuiter</a>
            <Link to ="/tuiter" href="#" className={`list-group-item ${parts.length <3 ?'active':''}`}>Home</Link>
            <Link to ="/tuiter/explore" href="#" className={`list-group-item ${parts[2] === 'explore'?'active':''}`}>Explore</Link>
            <a href ="#" className={`list-group-item ${parts[3] === 'notifications'?'active':''}`}>Notifications</a>
            <a href ="#" className={`list-group-item ${parts[4] === 'messages'?'active':''}`}>Messages</a>
            <a href ="#" className={`list-group-item ${parts[5] === 'bookmarks'?'active':''}`}>Bookmarks</a>
            <a href ="#" className={`list-group-item ${parts[6] === 'lists'?'active':''}`}>Lists</a>
            <a href ="#" className={`list-group-item ${parts[7] === 'profile'?'active':''}`}>Profile</a>
            <a href ="#" className={`list-group-item ${parts[8] === 'more'?'active':''}`}>More</a>
            <Link to ="/" className="list-group-item">Labs</Link>
        </div>
    );
};

export default NavigationSidebar;
