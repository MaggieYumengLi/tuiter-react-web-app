import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
      <!--Search field-->
      <div class="row">
        <div class="col-11">
        <div class="position-relative">
        <input class="ps-5 form-control mb-2 rounded-pill" placeholder="Search Twitter" class="fas fa-search">
        <span class="position-absolute wd-search-tuiter"><i class="fas fa-search" style="color: rgb(110,118,125)"></i></span>
        </div>
        </div>
        <div class="col-1"><i class="fas fa-cog fa-2x text-primary"></i></div>
        </div>

        <!--List tab link-->
        <ul class="nav nav-tabs">
        <li class="nav-item mb-2">
        <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item mb-2">
        <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item mb-2">
        <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item mb-2">
        <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item mb-2">
        <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
        </li>
        </ul>

        <!--Image-->
        <div class="position-relative">
        <img class="w-100" src="../explore/starship.jpg">
        <h2 class="position-absolute bottom-0 left-0 text-white fw-bold wd-left-padding">SpaceX's Starship</h2>
        </div>
        
        ${PostSummaryList()}
 `)
}
export default ExploreComponent;