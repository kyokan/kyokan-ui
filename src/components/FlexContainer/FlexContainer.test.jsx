import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FlexContainer from './FlexContainer';

configure({ adapter: new Adapter() });

describe('FlexContainer', () => {
    let mountedFlexContainer;
    const content = 'Test FlexContainer';
    const flexContainer = () => {
        if (!mountedFlexContainer) {
            mountedFlexContainer = mount(
                <FlexContainer>{content}</FlexContainer>
            );
        }

        return mountedFlexContainer;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = flexContainer().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
