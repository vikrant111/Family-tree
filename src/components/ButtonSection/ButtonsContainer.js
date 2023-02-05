import React from 'react'

const ButtonsContainer = () => {
  return (
    <>
    <div className='Button-container-Parent'>
        <div className='Import-json-and-add-family-container'>
            <button className='Action-button'>Import JSON</button>
            <button className='Action-button'>Add Family</button>
        </div>
        <div className='Export-json-and-add-print-family-container'>
            <button className='Action-button'>Export JSON</button>
            <button className='Action-button'>Print Family Tree</button>
        </div>
    </div>
    </>
  )
}

export default ButtonsContainer