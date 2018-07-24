import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OptionCard from './OptionCard';

configure({ adapter: new Adapter() });

describe('OptionCard', () => {
    let mountedOptionCard;
    const content = 'Test OptionCard';
    const optionCard = () => {
        if (!mountedOptionCard) {
            mountedOptionCard = mount(
                <OptionCard>{content}</OptionCard>
            );
        }

        return mountedOptionCard;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = optionCard().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
