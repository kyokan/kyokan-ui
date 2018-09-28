import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Image from './Image';

configure({ adapter: new Adapter() });

describe('Image', () => {
  let mountedImage;
  const content = 'Test Image';
  const image = () => {
    if (!mountedImage) {
      mountedImage = mount(
        <Image>{content}</Image>
      );
    }

    return mountedImage;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = image().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
