import React from 'react';
import { shallow } from 'enzyme';
import Content from '../../components/Content/Content';

describe('Content Component', () => {
    it('should render correctly', () => {
        const renderedModule = shallow(<Content />);
        expect(renderedModule).toMatchSnapshot();
    });
})