import React, { useRef } from 'react'
import check from './checkboxStyle.module.css'

const CheckBox = props => {

    const inputRef = useRef(null)
    const onChange = () => {
        if (props.onChange)  props.onChange(inputRef.current)
    }

    return (
        <label className={check.custom_checkbox}>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}/>
            <span className={check.checkmark}>
                <i className="fas fa-check"></i>
            </span>
            {props.data}
        </label>
    )
}

export default CheckBox