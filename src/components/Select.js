import React from 'react'

export default props => (
  <select {...props} value={props.value || '' }>
    {props.options.map((val) => (
      <option key={val} value={val}>{val}</option>
    ))}
  </select>
)
