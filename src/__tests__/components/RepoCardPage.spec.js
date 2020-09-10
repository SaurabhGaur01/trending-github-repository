import React from 'react';
import { shallow } from 'enzyme';
import { TestableRepoCardPage, mapStateToProps } from '../../components/Content/RepoCardPage';
import { API_CALL_STATUS_LOADING, API_CALL_STATUS_SUCCESS } from '../../constants/status';

describe('RepoCardContent Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            apiCallStatus: API_CALL_STATUS_LOADING,
            repoData: [
                {
                    id: 1,
                    name: 'mockName',
                    description: 'mockDescription',
                    html_url: 'mockUrl',
                    stargazers_count: 20,
                }
            ],
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableRepoCardPage {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when apiCallStatus is Success', () => {
        props.apiCallStatus = API_CALL_STATUS_SUCCESS;
        const renderedModule = shallow(<TestableRepoCardPage {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        const apiCallStatusMock = 'apiStatusMock';
        const repoDataMock = 'repoDataMock';

        const mockedState = {
            repoData: repoDataMock,
            apiCallStatus: apiCallStatusMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    apiCallStatus: apiCallStatusMock,
                    repoData: repoDataMock,
                }
            )
        })
    })
})