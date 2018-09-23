import React from 'react'

export default props => (
  <select {...props} value={props.value || '' }>
    <option key="default" value="">Select</option>
    {props.options.map((val) => (
      <option key={val} value={val}>{val}</option>
    ))}
  </select>
)
