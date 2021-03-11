import React from 'react'

export const Modal = ({visibility,close, albums}) => {
  return (
    <div style={{display: visibility ? 'flex' : 'none'}} className="container-modal">
    

      <div className="container-info">
      <button onClick={close}>x</button>
      <h1>Hola</h1>
      </div>
      
    </div>
  )
}
