import React from 'react';
import useForm from '../hooks/useForm'
import REQ_SERVICE from '../services/reqin'
import handleAsync from '../utils/handleAsync'
import {useAuth} from '../AuthContext'
import Swal from 'sweetalert2'

export default function Login() {
  const [form, handleInput] = useForm()
  const [,dispatch] = useAuth()

  const handleSubmit = async e =>{
    e.preventDefault()
   const {token} = await handleAsync(()=>REQ_SERVICE.login(form))
      if(token){
        localStorage.setItem('token', token)
        dispatch({type: 'LOGIN', payload: {token}})
      } 
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email o Password Incorrecto',
        })
      }
  }
  return (
    <>
    <div className="main-container-blue">
      <div className="login-container">
        <h2>Sign In</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <input onChange={handleInput} type="email" name="email" placeholder="Email"/>

        <input onChange={handleInput} type="password" name="password" placeholder="Password"/>
        <button onClick={handleSubmit}>Sign in</button>
        <p>Forgot your password?</p>

      </div>
    </div>
    </>
  );
}
