import React from 'react'

export default props => <input type="text" {...props} value={props.value || '' } />