import React from "react";
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
// import sinon from 'sinon';

import GoogleAuth from './GoogleAuth';


Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('<GoogleAuth />', () => {
    const wrapper = mount(<GoogleAuth />);
    console.log(wrapper);
    test('GoogleAuth component renders without error', () => {
        const googleAuth = wrapper.find("[data-test='component-google-auth']");
        expect(googleAuth.length).toBe(1);
    });
    
});

