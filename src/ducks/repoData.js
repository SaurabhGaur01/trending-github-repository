export const SET_REPO_DATA = 'modules/repo-app/SET_REPO_DATA';
export const CLEAR_REPO_DATA = 'modules/repo-app/CLEAR_REPO_DATA';

export const setRepoData = data => ({
    type: SET_REPO_DATA,
    data,
});

export const clearRepoData = () => ({
    type: CLEAR_REPO_DATA,
});

export const repoDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_REPO_DATA:
            return action.data;
        case CLEAR_REPO_DATA:
            return [];
        default:
            return state;               
    }
};