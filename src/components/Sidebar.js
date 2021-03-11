import React from 'react'

export const Sidebar = ({user, visibility, posts, close, deletePost, handleInput, editData}) => {
  return (
    <div style={{display: visibility ? 'flex' : 'none'}}  className="container-side">
      <div className="background-side">
      </div>
    
      <div className="sidebar">
        <button onClick={close}>x</button>
        <h2>Details</h2>
        <img src={user?.avatar} alt="profile-ph" />
        <form id="user-form">
        <input onChange={handleInput} name="first_name" defaultValue={user?.first_name}  type="text"/>
        <input onChange={handleInput} name="last_name" defaultValue={user?.last_name} type="text"/>
        <input onChange={handleInput} name="email" defaultValue={user?.email} type="email"/>
        <input type="submit" onClick={(e)=>editData(e,user?.id)} value="Save" className="save-data" />
        </form>
        <h3>Posts</h3>
        <div className="posts">
        {posts?.map((e,i)=>{
          return(
            <div className="posts-card" key={e.id}>
            <hr className="divider"/>
            <p > {e.title}</p>
            <button onClick={()=> deletePost(e.id)}>Delete</button>
            </div>
          )
        })}
        </div>

      </div>
    
    </div>
  )
}
