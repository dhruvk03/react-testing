import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

configure({ adapter: new Adapter() });

describe('List', () => {
    const list = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />);
    it('Renders List Component', () => {
        expect(list.length).toEqual(1);
    });

    it('has a class on rendred table', () => {
        expect(list.find('.myClass').length).toEqual(1);
    });

    it('has a Name column', () => {
        expect(list.find('th').first().text()).toEqual('Name');
    });

    it('has \'Name 2\' in second row', () => {
        expect(list.find('td').at(1).text()).toEqual('Name 2');
    });
});
