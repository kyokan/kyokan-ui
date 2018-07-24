import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('Input', () => {
    let mountedInput;
    const content = 'Test Input';
    const input = () => {
        if (!mountedInput) {
            mountedInput = mount(
                <Input>{content}</Input>
            );
        }

        return mountedInput;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = input().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
