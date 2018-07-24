import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stepper from './Stepper';

configure({ adapter: new Adapter() });

describe('Stepper', () => {
    let mountedStepper;
    const content = 'Test Stepper';
    const stepper = () => {
        if (!mountedStepper) {
            mountedStepper = mount(
                <Stepper>{content}</Stepper>
            );
        }

        return mountedStepper;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = stepper().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
