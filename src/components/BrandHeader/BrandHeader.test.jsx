import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BrandHeader from './BrandHeader';

configure({ adapter: new Adapter() });

describe('BrandHeader', () => {
    let mountedBrandHeader;
    const content = 'Test BrandHeader';
    const brandHeader = () => {
        if (!mountedBrandHeader) {
            mountedBrandHeader = mount(
                <BrandHeader>{content}</BrandHeader>
            );
        }

        return mountedBrandHeader;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = brandHeader().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
