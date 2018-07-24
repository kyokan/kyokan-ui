import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Note from './Note';

configure({ adapter: new Adapter() });

describe('Note', () => {
    let mountedNote;
    const content = 'Test Note';
    const note = () => {
        if (!mountedNote) {
            mountedNote = mount(
                <Note>{content}</Note>
            );
        }

        return mountedNote;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = note().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
