import React from 'react';
import { shallow } from 'enzyme';
import { TestableRepoCardContent, mapStateToProps } from '../../components/Content/RepoCardContent';

describe('RepoCardContent Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetStarredData: jest.fn(),
            actionClearStarredData: jest.fn(),
            starredData: [
                {
                    id: 1,
                    name: 'mockName',
                    description: 'mockDescription',
                    html_url: 'mockUrl',
                    stargazers_count: 20,
                }
            ],
            repository : {
                id: 1,
                name: 'mockName',
                description: 'mockDescription',
                html_url: 'mockUrl',
                stargazers_count: 20,
            }
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableRepoCardContent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        const starredDataMock = 'starredDataMock';
        
        const mockedState = {
            starredData: starredDataMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    starredData: starredDataMock,
                }
            )
        })
    })
})