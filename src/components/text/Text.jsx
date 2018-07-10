import React from 'react'
import PropTypes from 'prop-types'

/**
 * The most basic text style of the page.
 */
const Text = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Text.propTypes = {
    /** The text to display */
    children: PropTypes.any.isRequired,
};

export default Text;
