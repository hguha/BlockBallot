import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/ColorScheme.css';
import '../../styles/Button.css';

const propTypes = {
    enabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
};

const defaultProps = {
    enabled: true,
    onClick: () => {},
    size: "med",
    text: '',
    variant: "bg-primary"
};

function Button(props) {
    const {
        enabled,
        onClick,
        size,
        text,
        variant
    } = props;

    if (enabled) {
        return (
            <div className={"button " + variant + " " + size} onClick={onClick}>
                {text}
            </div>
        );
    } else {
        return (
            <div className={"button disabled " + size}>
                {text}
            </div>
        )
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
