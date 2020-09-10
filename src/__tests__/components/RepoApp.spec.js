import React from 'react';
import { shallow } from 'enzyme';
import { TestableRepoApp } from '../../components/RepoApp';

describe('RepoApp Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionCallRepoApi: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableRepoApp {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('componentDidMount', () => {
        it('should call actionCallRepoApi', () => {
            const instance = shallow(<TestableRepoApp {...props} />).instance();
            instance.componentDidMount();
            expect(props.actionCallRepoApi).toHaveBeenCalled();
        })
    })
})