import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('<Header />', () => {
    test('header renders without error', () => {
        const wrapper = shallow(<Header />);
        const headerComponent = wrapper.find("[data-test='component-header']");
        expect(headerComponent.length).toBe(1);
    });
});

