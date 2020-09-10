import { 
    setApiCallStatusError, setApiCallStatusLoading, setApiCallStatusSuccess
} from '../ducks/apiCallStatus';
import { setRepoData, clearRepoData } from '../ducks/repoData';
import moment from 'moment';
import { 
    BASE_URL, DEFAULT_ORDER, DEFAULT_SORT
} from '../constants/apiInfo';

const handleRetrieveRepoData = (selectedLanguage = '') => {
    const lastWeekDate = moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD');
    let url;
    if(selectedLanguage) {
        url = BASE_URL+'?q=created:>'+lastWeekDate+'+language:'+selectedLanguage+'&sort='+DEFAULT_SORT+'&order='+DEFAULT_ORDER;
    } else {
        url = BASE_URL+'?q=created:>'+lastWeekDate+'&sort='+DEFAULT_SORT+'&order='+DEFAULT_ORDER;
    }
    
    return async (dispatch) =>{
        dispatch(setApiCallStatusLoading());
        fetch(url)
        .then(response => response.json())
        .then(({ items = [] }) => {
            dispatch(clearRepoData());
            dispatch(setRepoData(items));
            dispatch(setApiCallStatusSuccess());
        })
        .catch(error => dispatch(setApiCallStatusError()));
    }
}

export default handleRetrieveRepoData;