import React from 'react';
import { shallow } from 'enzyme';
import { TestableStarredCardPage, mapStateToProps } from '../../components/Content/StarredCardPage';

describe('StarredCardPage Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            starredData: [
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
        const renderedModule = shallow(<TestableStarredCardPage {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when starredData is empty', () => {
        props.starredData = [];
        const renderedModule = shallow(<TestableStarredCardPage {...props} />);
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