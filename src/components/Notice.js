import React from 'react'

const Notice = (props) => {
  let notice = null
  let className = 'hidden'
  if (props.isLoading) {
    notice =
    <div className="load-bar">
      <div className="text">{props.isLoading}</div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    className = 'loading'
  }
  if (props.isUpdated===true) {
    notice = 'Published!'
    className = 'updated'
  }
  if (props.isUpdated===false) {
    notice = 'Something went wrong.'
    className = 'error'
  }
  return (
    <div className={`notice notice-${className}`}>{notice}</div>
  )
}

export default Notice