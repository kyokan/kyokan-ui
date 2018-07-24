import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VerticalTabGroup from './VerticalTabGroup';

configure({ adapter: new Adapter() });

describe('VerticalTabGroup', () => {
    let mountedVerticalTabGroup;
    const content = 'Test VerticalTabGroup';
    const verticalTabGroup = () => {
        if (!mountedVerticalTabGroup) {
            mountedVerticalTabGroup = mount(
                <VerticalTabGroup>{content}</VerticalTabGroup>
            );
        }

        return mountedVerticalTabGroup;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = verticalTabGroup().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
