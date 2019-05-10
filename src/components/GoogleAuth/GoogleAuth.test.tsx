import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import GoogleAuth from './GoogleAuth';


Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('<GoogleAuth />', () => {
    test('GoogleAuth component renders without error', () => {
        const wrapper = shallow(<GoogleAuth />);
        const googleAuth = wrapper.find("[data-test='component-google-auth']");
        expect(googleAuth.length).toBe(1);
    });
    
});

