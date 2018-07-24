import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CostButton from './CostButton';

configure({ adapter: new Adapter() });

describe('CostButton', () => {
    let mountedCostButton;
    const content = 'Test CostButton';
    const costButton = () => {
        if (!mountedCostButton) {
            mountedCostButton = mount(
                <CostButton>{content}</CostButton>
            );
        }

        return mountedCostButton;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = costButton().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
