import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Line from './Line';

configure({ adapter: new Adapter() });

describe('Line', () => {
    let mountedLine;
    const content = 'Test Line';
    const line = () => {
        if (!mountedLine) {
            mountedLine = mount(
                <Line>{content}</Line>
            );
        }

        return mountedLine;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = line().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
