import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import REQ_SERVICE from '../../services/reqin'
import JSON_SERVICE from '../../services/jsonplaceholder'
import handleAsync from '../../utils/handleAsync'
import useForm from '../../hooks/useForm'

export const Home = () => {
  const [form, handleInput, setForm] = useForm()
  const [users, setUsers] = useState(null)
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [visibility, setVisibility] = useState(false)


  

  const editUser = (id) =>{
    setVisibility(true)
    REQ_SERVICE.user(id)
    .then(({data:{data}})=> setUser(data))
    .catch(err => console.log(err.response))
    JSON_SERVICE.posts(id)
    .then(({data})=> setPosts([...data]))
    .catch(err => console.log(err.response))

  }

  useEffect(()=>{
    REQ_SERVICE.users()
    .then(({data:{data}})=> setUsers(data))
    .catch(err => console.log(err))
  },[])

  const close = () =>{
    setVisibility(false)
  }

  const deletePost = (id) =>{
    JSON_SERVICE.deletePost(id)
    .then(({data})=>{
      const postsFilter = posts.filter(post => post.id !== id)
      setPosts(postsFilter)

    })
    .catch(err => console.log(err.response))
  }

  const editData = (id) =>{
    const data ={
      ...form,
      id
    }
    REQ_SERVICE.update(id, data)
    .then(({data})=>{
      const usersOld = users
      const userFind = users.find(user=> user.id === id)
      const usersUpdate = usersOld.map(e=>{
        if(e.id === data.id){
          e.first_name = data.first_name ? data.first_name : userFind.first_name
          e.last_name = data.last_name ? data.last_name : userFind.last_name
          e.email = data.email ? data.email : userFind.email
          return e
        }
        return e
      })
      setUsers(usersUpdate)
      setForm(null)
      setVisibility(false)
    })
    .catch(err => console.log(err.response))
  }

  return (
    <div>
      <Navbar/>
      <div className="container-cards">
        {
          users?.map((e,i)=>{
            return(
              <div className="cards-home" key={e.id}>
                <img onClick={()=>editUser(e.id)} src={e.avatar} alt={e.first_name} />
                <p onClick={()=>editUser(e.id)}>{e.first_name} {e.last_name}</p>
                <p onClick={()=>editUser(e.id)}>{e.email}</p>
              </div>
            )
          })
        }
        <Sidebar handleInput={handleInput} editData={editData} visibility={visibility} user={user} posts={posts} close={close} deletePost={deletePost}/>

      </div>

    </div>
  )
}
