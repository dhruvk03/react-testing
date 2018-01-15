import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount } from 'enzyme';
import Add from './Add';
import App from './App';

configure({ adapter: new Adapter() });

describe('Add', () => {
    const onAdd = jest.fn();
    const add = mount(<Add onAdd={onAdd} />);

    it('Requies onAdd prop', () => {
        expect(add.props().onAdd).toBeDefined();
    });

    it('has a button', () => {
        expect(add.find('button').first()).toBeDefined();
    });

    it('button click calls onAdd', () => {
        const button = add.find('button').first();
        const input = add.find('input').first();
        input.simulate('change', { target: { value: 'Name 4' } });
        button.simulate('click');
        expect(onAdd).toBeCalledWith('Name 4');
    });
});

describe('App', () => {
    const app = shallow(<App />);
    it('App renders nested components', () => {
        expect(app.find('Add').length).toEqual(1);
        expect(app.find('List').length).toEqual(1);
    });

    it('onAdd updates list', () => {
        const add = app.find('Add').first();
        add.props().onAdd('Name 1');
        app.update();
        const list = app.find('List');
        expect(list.props().data[0]).toEqual('Name 1');
        expect(list.find('table').first().length).toEqual(1);
    });
})

