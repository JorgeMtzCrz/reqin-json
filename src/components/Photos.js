import React from 'react'

export const Photos = ({show, photos}) => {
  console.log(photos)
  return (
    <div className="photos-container"  style={{display: show ? 'flex' : 'none'}}>
      {photos?.map((e)=>{
        return(
        <img key={e.id} src={e.thumbnailUrl} alt={e.thumbnailUrl+e.id} />
        )
      })}
    </div>
  )
}
