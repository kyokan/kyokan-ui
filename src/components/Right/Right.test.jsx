import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Right from './Right';

configure({ adapter: new Adapter() });

describe('Right', () => {
    let mountedRight;
    const content = 'Test Right';
    const right = () => {
        if (!mountedRight) {
            mountedRight = mount(
                <Right>{content}</Right>
            );
        }

        return mountedRight;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = right().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
