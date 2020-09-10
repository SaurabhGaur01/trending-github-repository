import { combineReducers } from 'redux';
import { apiCallStatusReducer as apiCallStatus } from '../ducks/apiCallStatus';
import { repoDataReducer as repoData } from '../ducks/repoData';
import { starredDataReducer as starredData } from '../ducks/starredData';

export default combineReducers({
    apiCallStatus,
    repoData,
    starredData,
})