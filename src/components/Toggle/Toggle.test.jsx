import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toggle from './Toggle';

configure({ adapter: new Adapter() });

describe('Toggle', () => {
    let mountedToggle;
    const content = 'Test Toggle';
    const toggle = () => {
        if (!mountedToggle) {
            mountedToggle = mount(
                <Toggle>{content}</Toggle>
            );
        }

        return mountedToggle;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = toggle().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
