import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Row from './Row';

configure({ adapter: new Adapter() });

describe('Row', () => {
    let mountedRow;
    const content = 'Test Row';
    const row = () => {
        if (!mountedRow) {
            mountedRow = mount(
                <Row>{content}</Row>
            );
        }

        return mountedRow;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = row().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
