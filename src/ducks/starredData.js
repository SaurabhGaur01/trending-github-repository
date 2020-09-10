export const SET_STARRED_DATA = 'modules/repo-app/SET_STARRED_DATA';
export const CLEAR_STARRED_DATA = 'modules/repo-app/CLEAR_STARRED_DATA';

export const setStarredData = data => ({
    type: SET_STARRED_DATA,
    data,
});

export const clearStarredData = () => ({
    type: CLEAR_STARRED_DATA,
});

export const starredDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_STARRED_DATA:
            return action.data;
        case CLEAR_STARRED_DATA:
            return [];
        default:
            return state;               
    }
};