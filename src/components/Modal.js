import React, {useState} from 'react'
import JSON_SERVICE from '../services/jsonplaceholder'
import { Photos } from './Photos'
import capitalize from '../utils/capitalize'

export const Modal = ({visibility, setVisibility, albums, user}) => {
  const [photos, setPhotos] = useState(null)
  const [show, setShow] = useState(false)

  const checkPhotos = (id)=>{
    setShow(true)
    JSON_SERVICE.photos(id)
    .then(({data})=> setPhotos(data))
    .catch(err=> console.log(err))
  }
  
  const close = () =>{
    setVisibility(false)
    setPhotos(null)
  }

  return (
    <div style={{display: visibility ? 'flex' : 'none'}} className="container-modal">
    
      <div className="container-info">
      <button onClick={close}>x</button>
        <h2>{user?.first_name} {user?.last_name}</h2>
        <h3>{user?.email}</h3>
        <h4>To see the photos of an album, please click on the name</h4>
        <div className="container-albums">
          {albums?.map((e,i)=>{
            const title = capitalize(e.title)
            return(
              <div key={e.id} className="card-album">
                <p onClick={()=> checkPhotos(e.id)} >{title}</p>
              </div>
            )
          })
          }
        </div>
        <Photos show={show} photos={photos} />
      </div>
      
    </div>
  )
}
