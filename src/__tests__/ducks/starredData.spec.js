import {
    setStarredData,
    clearStarredData,
    starredDataReducer,
} from '../../ducks/starredData';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('starredData Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setStarredData should match the snapshot' , () => {
            expect(setStarredData(mockObject)).toMatchSnapshot();
        });
        it('clearStarredData should match the snapshot' , () => {
            expect(clearStarredData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(starredDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(starredDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(starredDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of the API call' , () => {
            expect(starredDataReducer('', setStarredData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearStarredData' , () => {
            expect(starredDataReducer(mockObject, clearStarredData())).toEqual([]);
        });
    });
});