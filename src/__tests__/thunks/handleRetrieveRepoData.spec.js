import handleRetrieveRepoData from '../../thunks/handleRetrieveRepoData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockKey: { mockValue } }),
  })
);

jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-08-30');
});

describe('The Thunk handleRetrieveRepoData', () => {
    const selectedLanguage = '';
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
        fetch.mockClear();
    });

    it('should call API successfully', () => {
        handleRetrieveRepoData(selectedLanguage) (dispatch);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("should return null when exception", async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        handleRetrieveRepoData(selectedLanguage) (dispatch);     
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/search/repositories?q=created:>2020-08-23&sort=stars&order=desc');
      });

})
