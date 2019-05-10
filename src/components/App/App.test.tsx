import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    const taskCreateRoute = wrapper.find("[data-test='task-create-route']")
    test('App renders without error', () => {
        expect(appComponent.length).toBe(1);
    });
    


});

