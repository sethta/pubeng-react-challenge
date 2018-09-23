import React from 'react'

const Notice = (props) => {
  let notice = null
  let className = 'hidden'
  if (props.isLoading) {
    notice =
    <div className="load-bar">
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    className = 'loading'
  }
  return (
    <div className={`notice notice-${className}`}>{notice}</div>
  )
}

export default Notice