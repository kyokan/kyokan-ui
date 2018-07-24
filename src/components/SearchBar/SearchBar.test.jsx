import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
    let mountedSearchBar;
    const content = 'Test SearchBar';
    const searchBar = () => {
        if (!mountedSearchBar) {
            mountedSearchBar = mount(
                <SearchBar>{content}</SearchBar>
            );
        }

        return mountedSearchBar;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = searchBar().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
