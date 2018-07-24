import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HorizontalTabGroup from './HorizontalTabGroup';

configure({ adapter: new Adapter() });

describe('HorizontalTabGroup', () => {
    let mountedHorizontalTabGroup;
    const content = 'Test HorizontalTabGroup';
    const horizontalTabGroup = () => {
        if (!mountedHorizontalTabGroup) {
            mountedHorizontalTabGroup = mount(
                <HorizontalTabGroup>{content}</HorizontalTabGroup>
            );
        }

        return mountedHorizontalTabGroup;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = horizontalTabGroup().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
