import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import shortID from 'shortid';

/**
* A textarea for the user to input text
*/
const TextArea = (props) => {
  const StyledWrapper = styled.div`
    display   : flex;
    flex-flow : column nowrap;
  `;

  const StyledTextArea = styled.textarea`
    flex: 1 0 auto;

    font-family : ${ ({ theme} ) => theme.textAreaFontFamily };
    font-weight : ${ ({ theme} ) => theme.textAreaFontWeight };
    font-size   : ${ ({ theme} ) => theme.textAreaFontSize };
    color       : ${ ({ theme} ) => theme.textAreaColor };

    border-color  : ${ ({ theme} ) => theme.textAreaBorderColor };
    border-width  : ${ ({ theme} ) => theme.textAreaBorderWidth };
    border-style  : ${ ({ theme} ) => theme.textAreaBorderStyle };
    border-radius : ${ ({ theme} ) => theme.textAreaBorderRadius };

    padding-top    : ${ ({ theme} ) => theme.textAreaPaddingTop };
    padding-right  : ${ ({ theme} ) => theme.textAreaPaddingRight };
    padding-bottom : ${ ({ theme} ) => theme.textAreaPaddingBottom };
    padding-left   : ${ ({ theme} ) => theme.textAreaPaddingLeft };

    outline : none;
    resize : none;

    &:focus {
      border-color : ${ ({ theme} ) => theme.textAreaBorderColorActive };
    }

    &::placeholder {
      color       : ${ ({ theme} ) => theme.textAreaPlaceholderColor };
      font-weight : ${ ({ theme} ) => theme.textAreaPlaceholderFontWeight };
    }
  `;

  const StyledLabel = styled.label`
    margin-bottom  : ${ ({ theme} ) => theme.textAreaLabelMarginBottom };
    color          : ${ ({ theme} ) => theme.textAreaLabelColor };
    font-family    : ${ ({ theme} ) => theme.textAreaFontFamily };
    font-size      : ${ ({ theme} ) => theme.textAreaLabelFontSize };
    text-transform : ${ ({ theme} ) => theme.textAreaLabelTextTransform };
  `;

  const id = shortID.generate(); // to tie label to input

  return (
    <StyledWrapper
      className={props.className}
    >
      <StyledLabel
        htmlFor={id}
      >
        {props.label}
      </StyledLabel>
      <StyledTextArea
        autoFocus={props.autofocus}
        cols={props.cols}
        defaultValue={props.children}
        disabled={props.disabled}
        id={id}
        data-id={props['data-id']}
        maxLength={props.maxlength}
        name={props.name}
        onKeyUp={props.onKeyUp}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        rows={props.rows}
      />
    </StyledWrapper>
  );
};

TextArea.defaultProps = {
  autofocus   : false,
  children    : '',
  className   : '',
  cols        : 20,
  'data-id'   : '',
  disabled    : false,
  label       : '',
  maxlength   : null,
  name        : '',
  onKeyUp     : () => {},
  placeholder : '',
  readonly    : false,
  rows        : 2,
};

TextArea.propTypes = {
  /** Specifies that a text area should automatically get focus when the page loads */
  autofocus: PropTypes.bool,

  /** The default text for the textarea */
  children: PropTypes.string,

  /** Class name for top-level wrapper */
  className: PropTypes.string,

  /** Specifies the visible width of a text area */
  cols: PropTypes.number,

  /** A data attribute ID (used in place of refs since this is a stateless component) */
  'data-id': PropTypes.string,

  /** Whether or not the textarea is disabled */
  disabled: PropTypes.bool,

  /** Label text for the TextArea */
  label: PropTypes.string,

  /** Specifies the maximum number of characters allowed in the text area */
  maxlength: PropTypes.number,

  /** The name for the textarea */
  name: PropTypes.string,

  /** A callback function to fire when user is typing */
  onKeyUp: PropTypes.func,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Specifies that a text area should be read-only */
  readonly: PropTypes.bool,

  /** Specifies the visible number of lines in a text area */
  rows: PropTypes.number,
};

/** @component */
export default TextArea;
