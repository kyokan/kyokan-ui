import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Left from './Left';

configure({ adapter: new Adapter() });

describe('Left', () => {
    let mountedLeft;
    const content = 'Test Left';
    const left = () => {
        if (!mountedLeft) {
            mountedLeft = mount(
                <Left>{content}</Left>
            );
        }

        return mountedLeft;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = left().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
