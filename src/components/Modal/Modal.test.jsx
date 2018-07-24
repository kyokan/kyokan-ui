import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';

configure({ adapter: new Adapter() });

describe('Modal', () => {
    let mountedModal;
    const content = 'Test Modal';
    const modal = () => {
        if (!mountedModal) {
            mountedModal = mount(
                <Modal>{content}</Modal>
            );
        }

        return mountedModal;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = modal().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
