import React from 'react'

const Checkbox = (props) => {
  let checked = false
  if (props.value===true) {
    checked = true
  }

  return <input type="checkbox" {...props} />
}

export default Checkbox