
import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./Who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <div class="list-group-item list-group-item-action">
                <b>Who to follow</b>
            </div>
            ${who.map(item => whoToFollowListItem(item)).join('')}
        </ul>
    `);
}

export default WhoToFollowList;
