import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import REQ_SERVICE from '../../services/reqin'
import JSON_SERVICE from '../../services/jsonplaceholder'
import { Modal } from '../../components/Modal'
import { animateScroll as scroll} from 'react-scroll'

export const Album = () => {
  const [users, setUsers] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [visibility, setVisibility] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(()=>{
    REQ_SERVICE.users()
    .then(({data:{data}})=> setUsers(data))
    .catch(err => console.log(err))

  },[])


  const viewAlbum = (id) =>{

    setVisibility(true)
    scroll.scrollToTop();
    JSON_SERVICE.albums(id)
    .then(({data})=>{
      setAlbums(data)
    })
    .catch(err => console.log(err))
    REQ_SERVICE.user(id)
    .then(({data:{data}})=> setUser(data))
    .catch(err => console.log(err.response))
  }

  
  return (
    <div id="top-albums">
    <Navbar/>
      <div className="title" >
        <h1>Albums</h1>

      </div>
      <div className="container-cards" >
        {
          users?.map((e,i)=>{
            return(
              <div className="cards-home" key={e.id}>
                <img onClick={()=>viewAlbum(e.id)} src={e.avatar} alt={e.first_name} />
                <p onClick={()=>viewAlbum(e.id)}>{e.first_name} {e.last_name}</p>
                <p onClick={()=>viewAlbum(e.id)}>{e.email}</p>
              </div>
            )
          })
        }
      <Modal visibility={visibility} setVisibility={setVisibility} user={user} albums={albums} />
      </div>
    </div>
  )
}
