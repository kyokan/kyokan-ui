import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from './Link';

configure({ adapter: new Adapter() });

describe('Link', () => {
    let mountedLink;
    const content = 'Test Link';
    const link = () => {
        if (!mountedLink) {
            mountedLink = mount(
                <Link>{content}</Link>
            );
        }

        return mountedLink;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = link().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
