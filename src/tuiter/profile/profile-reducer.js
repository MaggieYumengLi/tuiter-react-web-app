import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: 'jannunzi',
    profilePicture: 'pro.PNG',
    bannerPicture: 'pic.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth : '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}
const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;