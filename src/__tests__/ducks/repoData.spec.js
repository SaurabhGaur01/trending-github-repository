import {
    setRepoData,
    clearRepoData,
    repoDataReducer,
} from '../../ducks/repoData';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('repoData Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setRepoData should match the snapshot' , () => {
            expect(setRepoData(mockObject)).toMatchSnapshot();
        });
        it('clearRepoData should match the snapshot' , () => {
            expect(clearRepoData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(repoDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(repoDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(repoDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of the API call' , () => {
            expect(repoDataReducer('', setRepoData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearRepoData' , () => {
            expect(repoDataReducer(mockObject, clearRepoData())).toEqual([]);
        });
    });
});