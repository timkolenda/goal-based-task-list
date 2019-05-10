import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import GoogleAuth from './GoogleAuth';


Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('<GoogleAuth />', () => {
    const wrapper = shallow(<GoogleAuth />);
    console.log(wrapper);
    const googleAuth = wrapper.find("[data-test='component-google-auth']");
    test('GoogleAuth component renders without error', () => {
        expect(googleAuth.length).toBe(1);
    });
    
});

