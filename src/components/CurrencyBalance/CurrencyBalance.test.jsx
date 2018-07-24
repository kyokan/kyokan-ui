import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyBalance from './CurrencyBalance';

configure({ adapter: new Adapter() });

describe('CurrencyBalance', () => {
    let mountedCurrencyBalance;
    const content = 'Test CurrencyBalance';
    const currencyBalance = () => {
        if (!mountedCurrencyBalance) {
            mountedCurrencyBalance = mount(
                <CurrencyBalance>{content}</CurrencyBalance>
            );
        }

        return mountedCurrencyBalance;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = currencyBalance().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
