import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Subtitle from './Subtitle';

configure({ adapter: new Adapter() });

describe('Subtitle', () => {
    let mountedSubtitle;
    const content = 'Test Subtitle';
    const subtitle = () => {
        if (!mountedSubtitle) {
            mountedSubtitle = mount(
                <Subtitle>{content}</Subtitle>
            );
        }

        return mountedSubtitle;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = subtitle().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
