import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserTagline from './UserTagline';

configure({ adapter: new Adapter() });

describe('UserTagline', () => {
    let mountedUserTagline;
    const content = 'Test UserTagline';
    const userTagline = () => {
        if (!mountedUserTagline) {
            mountedUserTagline = mount(
                <UserTagline>{content}</UserTagline>
            );
        }

        return mountedUserTagline;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = userTagline().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
