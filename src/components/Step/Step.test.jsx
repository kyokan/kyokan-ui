import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Step from './Step';

configure({ adapter: new Adapter() });

describe('Step', () => {
    let mountedStep;
    const content = 'Test Step';
    const step = () => {
        if (!mountedStep) {
            mountedStep = mount(
                <Step>{content}</Step>
            );
        }

        return mountedStep;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = step().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
