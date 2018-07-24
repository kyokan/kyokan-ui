import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tooltip from './Tooltip';

configure({ adapter: new Adapter() });

describe('Tooltip', () => {
    let mountedTooltip;
    const content = 'Test Tooltip';
    const tooltip = () => {
        if (!mountedTooltip) {
            mountedTooltip = mount(
                <Tooltip>{content}</Tooltip>
            );
        }

        return mountedTooltip;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = tooltip().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
