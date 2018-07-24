import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Slider from './Slider';

configure({ adapter: new Adapter() });

describe('Slider', () => {
    let mountedSlider;
    const content = 'Test Slider';
    const slider = () => {
        if (!mountedSlider) {
            mountedSlider = mount(
                <Slider>{content}</Slider>
            );
        }

        return mountedSlider;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = slider().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
