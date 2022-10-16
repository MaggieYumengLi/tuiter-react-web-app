
const postItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" style="width:50px" src=${post.profilePhoto}>
                </div>
                <div class="col-11 ps-4">
                    <div class="row">
                        <div class="row">
                            <div class="col-11">
                                <span ><b>${post.user}</b></span> 
                                <i class="fas fa-check-circle"></i>
                                <span class="text-secondary"> @${post.handle} - ${post.time}</span>
                            </div>
                            <div class="col-1">
                                <span class="float-end text-secondary fw-bolder">...</span>
                            </div>
                        </div>
                </div>
                    
                    <div>${post.content}</div>
                    
                    <div class="mt-2 border border-secondary rounded-3">
                      <img src=${post.image} class="card-img-top rounded-3">
                      ${post.title2 || post.content2 || post.link ?
        `<div class="border-top border-secondary p-3">
                            ${post.title2 ? `<p class="card-text mb-0">${post.title2}</p>` : ``}
                            ${post.content2 ? `<p class="text-secondary mb-0">${post.content2}</p>` : ``}
                            ${post.content2 ? `<p class="text-secondary mb-0"><i class="fas fa-link"></i>${post.link}</p>` : ``}
                          </div>`
        : ``}
        
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-3">
                            <a class="text-decoration-none text-secondary" href="#"><i class="far fa-comment"></i><span class="ms-3">${post.comment}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none text-secondary " href="#"><i class="fas fa-retweet"></i><span class="ms-3">${post.share}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none text-secondary " href="#" class="wd-liked"><i class="far fa-heart"></i><span class="ms-3">${post.like}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none text-secondary text-decoration-none" href="#"><i class="fas fa-arrow-up"></i></a>
                        </div>    
                    </div>
                </div>      
            </div>
        </li>
    `)
}

export default postItem;