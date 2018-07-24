import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Center from './Center';

configure({ adapter: new Adapter() });

describe('Center', () => {
    let mountedCenter;
    const content = 'Test Center';
    const center = () => {
        if (!mountedCenter) {
            mountedCenter = mount(
                <Center>{content}</Center>
            );
        }

        return mountedCenter;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = center().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
