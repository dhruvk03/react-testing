import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

configure({ adapter: new Adapter() });

describe('Welcome', () => {
    it('Welcome renders hello world', () => {
        const welcome = shallow(<Welcome />);
        expect(welcome.find('div').text()).toEqual('Hello');
    });
});
