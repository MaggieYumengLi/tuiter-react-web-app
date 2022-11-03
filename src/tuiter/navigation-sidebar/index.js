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
            <a href ="/#" className="list-group-item">Tuiter</a>
            <Link to ="/tuiter" href="#" className={`list-group-item ${parts.length <3 ?'active':''}`}><i className="bi bi-house-door-fill me-2"></i>Home</Link>
            <Link to ="/tuiter/explore" href="#" className={`list-group-item ${parts[2] === 'explore'?'active':''}`}><i className="bi bi-hash me-2"></i>Explore</Link>
            <Link to ="/" className="list-group-item"><i className="bi bi-asterisk me-2"></i>Labs</Link>
            <a href ="/#" className={`list-group-item ${parts[3] === 'notifications'?'active':''}`}><i className="bi bi-bell me-2"></i>Notifications</a>
            <a href ="/#" className={`list-group-item ${parts[4] === 'messages'?'active':''}`}><i className="bi bi-envelope me-2"></i>Messages</a>
            <a href ="/#" className={`list-group-item ${parts[5] === 'bookmarks'?'active':''}`}><i className="bi bi-bookmark me-2"></i>Bookmarks</a>
            <a href ="/#" className={`list-group-item ${parts[6] === 'lists'?'active':''}`}><i className="bi bi-card-list me-2"></i>Lists</a>
            <a href ="/#" className={`list-group-item ${parts[7] === 'profile'?'active':''}`}><i className="bi bi-person me-2"></i>Profile</a>
            <a href ="/#" className={`list-group-item ${parts[8] === 'more'?'active':''}`}><i className="bi bi-three-dots me-2"></i>More</a>
        </div>
    );
};

export default NavigationSidebar;

