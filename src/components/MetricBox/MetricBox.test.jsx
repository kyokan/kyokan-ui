import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MetricBox from './MetricBox';

configure({ adapter: new Adapter() });

describe('MetricBox', () => {
    let mountedMetricBox;
    const content = 'Test MetricBox';
    const metricBox = () => {
        if (!mountedMetricBox) {
            mountedMetricBox = mount(
                <MetricBox>{content}</MetricBox>
            );
        }

        return mountedMetricBox;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = metricBox().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
