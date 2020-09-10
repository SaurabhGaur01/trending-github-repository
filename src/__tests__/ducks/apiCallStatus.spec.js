import {
    setApiCallStatusError,
    setApiCallStatusSuccess,
    setApiCallStatusLoading,
    apiCallStatusReducer,
} from '../../ducks/apiCallStatus';

import { 
    API_CALL_STATUS_SUCCESS, API_CALL_STATUS_ERROR, API_CALL_STATUS_LOADING
} from '../../constants/status';

describe('apiCallStatus Duck Tests', () => {
    const mockState = {
        key: 'mockKey',
    }

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setApiCallStatusLoading should match the snapshot' , () => {
            expect(setApiCallStatusLoading()).toMatchSnapshot();
        });
        it('setApiCallStatusError should match the snapshot' , () => {
            expect(setApiCallStatusError()).toMatchSnapshot();
        });
        it('setApiCallStatusSuccess should match the snapshot' , () => {
            expect(setApiCallStatusSuccess()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(apiCallStatusReducer()).toEqual('');
        });
        it('should return the passed state if called with no action' , () => {
            expect(apiCallStatusReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(apiCallStatusReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value of the constant API_CALL_STATUS_SUCCESS' , () => {
            expect(apiCallStatusReducer(mockState, setApiCallStatusSuccess()))
            .toEqual(API_CALL_STATUS_SUCCESS);
        });
        it('should return the value of the constant API_CALL_STATUS_ERROR' , () => {
            expect(apiCallStatusReducer(mockState, setApiCallStatusError()))
            .toEqual(API_CALL_STATUS_ERROR);
        });
        it('should return the value of the constant API_CALL_STATUS_LOADING' , () => {
            expect(apiCallStatusReducer(mockState, setApiCallStatusLoading()))
            .toEqual(API_CALL_STATUS_LOADING);
        });
    });

})