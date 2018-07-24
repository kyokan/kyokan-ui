import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pill from './Pill';

configure({ adapter: new Adapter() });

describe('Pill', () => {
    let mountedPill;
    const content = 'Test Pill';
    const pill = () => {
        if (!mountedPill) {
            mountedPill = mount(
                <Pill>{content}</Pill>
            );
        }

        return mountedPill;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = pill().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
