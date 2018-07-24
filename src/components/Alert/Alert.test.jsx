import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Alert from './Alert';

configure({ adapter: new Adapter() });

describe('Alert', () => {
    let mountedAlert;
    const content = 'Test Alert';
    const alert = () => {
        if (!mountedAlert) {
            mountedAlert = mount(
                <Alert>{content}</Alert>
            );
        }

        return mountedAlert;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = alert().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
