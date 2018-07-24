import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Video from './Video';

configure({ adapter: new Adapter() });

describe('Video', () => {
    let mountedVideo;
    const content = 'Test Video';
    const video = () => {
        if (!mountedVideo) {
            mountedVideo = mount(
                <Video>{content}</Video>
            );
        }

        return mountedVideo;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = video().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
