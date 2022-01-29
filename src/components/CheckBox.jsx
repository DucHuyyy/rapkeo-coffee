import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

    const inputRef = React.useRef(null)

    const onChange = () => {
        props.onChange(props.label)
    }

    return (
        <label className="custom-checkbox">
            <input type="radio" name="radio" ref={inputRef} onChange={onChange} checked={props.checked} className="custom-checkbox_input"/>
            <span className="custom-checkbox_title">
            {props.label}
            </span>
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox