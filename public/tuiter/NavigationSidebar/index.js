
    const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter" style="color: white"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-home"></i>
                <span class="d-none d-xl-inline-block">Home</span>
             </a>
            <a href="#" class=" list-group-item list-group-item-action active">
                <i class="fas fa-hashtag"></i>
                <span class="d-none d-xl-inline-block">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-bell"></i>
                <span class="d-none d-xl-inline-block">Notification</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-envelope"></i>
                <span class="d-none d-xl-inline-block">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-bookmark"></i>
                <span class="d-none d-xl-inline-block">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-inline-block">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                 <i class="fas fa-user"></i>
                <span class="d-none d-xl-inline-block">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline-block">More</span>
            </a>
        </div>
        <button class="btn btn-primary w-100 mt-2 rounded-pill">
            Tweet
        </button>  
    `);
}

export default NavigationSidebar;

