import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyTag from './CurrencyTag';

configure({ adapter: new Adapter() });

describe('CurrencyTag', () => {
    let mountedCurrencyTag;
    const content = 'Test CurrencyTag';
    const currencyTag = () => {
        if (!mountedCurrencyTag) {
            mountedCurrencyTag = mount(
                <CurrencyTag>{content}</CurrencyTag>
            );
        }

        return mountedCurrencyTag;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = currencyTag().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
