import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StarRating from './StarRating';

configure({ adapter: new Adapter() });

describe('StarRating', () => {
    let mountedStarRating;
    const content = 'Test StarRating';
    const starRating = () => {
        if (!mountedStarRating) {
            mountedStarRating = mount(
                <StarRating>{content}</StarRating>
            );
        }

        return mountedStarRating;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = starRating().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
