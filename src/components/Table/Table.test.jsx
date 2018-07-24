import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';

configure({ adapter: new Adapter() });

describe('Table', () => {
    let mountedTable;
    const content = 'Test Table';
    const table = () => {
        if (!mountedTable) {
            mountedTable = mount(
                <Table>{content}</Table>
            );
        }

        return mountedTable;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = table().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
