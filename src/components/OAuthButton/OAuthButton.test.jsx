import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OAuthButton from './OAuthButton';

configure({ adapter: new Adapter() });

describe('OAuthButton', () => {
    let mountedOAuthButton;
    const content = 'Test OAuthButton';
    const oAuthButton = () => {
        if (!mountedOAuthButton) {
            mountedOAuthButton = mount(
                <OAuthButton>{content}</OAuthButton>
            );
        }

        return mountedOAuthButton;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = oAuthButton().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
