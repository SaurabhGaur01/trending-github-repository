import { 
    API_CALL_STATUS_SUCCESS, API_CALL_STATUS_ERROR, API_CALL_STATUS_LOADING
} from '../constants/status';

export const SET_API_CALL_STATUS_SUCCESS = 'modules/repo-app/SET_API_CALL_STATUS_SUCCESS';
export const SET_API_CALL_STATUS_LOADING = 'modules/repo-app/SET_API_CALL_STATUS_LOADING';
export const SET_API_CALL_STATUS_ERROR = 'modules/repo-app/SET_API_CALL_STATUS_ERROR';

export const setApiCallStatusSuccess = () => ({
    type: SET_API_CALL_STATUS_SUCCESS,
});

export const setApiCallStatusLoading = () => ({
    type: SET_API_CALL_STATUS_LOADING,
});

export const setApiCallStatusError = () => ({
    type: SET_API_CALL_STATUS_ERROR,
});

export const apiCallStatusReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_API_CALL_STATUS_SUCCESS:
            return API_CALL_STATUS_SUCCESS;
        case SET_API_CALL_STATUS_LOADING:
            return API_CALL_STATUS_LOADING;
        case SET_API_CALL_STATUS_ERROR:
            return API_CALL_STATUS_ERROR;
        default:
            return state;               
    }
};