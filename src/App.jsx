
import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"
// import { toast, ToastContainer } from 'react-toastify';
function App() {
  



  const{register,handleSubmit,formState : {errors}}=useForm()
  const [submit,setSubmit]=useState(false)

 function doneSubmit(data){
    console.log(data)
    setSubmit(true)
  }

  return (
    <>
      {submit?<h1>Registration Sucessfull</h1>:null}

      <form onSubmit={handleSubmit(doneSubmit)}>
        <h2>First Name</h2>
        <input type="text" placeholder='First Name'
          {...register("firstName",{required:"Enter The First Name"})}
        />
        <br />
        <span>{errors.firstName?.message}</span>

        <h2>Last Name</h2>
        <input type="text" placeholder='Last Name'
          {...register("lastName",{required:"Enter The Last Name"})}
        />
        <br />
        <span>{errors.lastName?.message}</span>

        <h2>Email</h2>
        <input type="email"  placeholder='Email ID'
          {...register("email",{required:"Enter The Email",pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}
        />
        <br />
        <span>{errors.email?.message}</span>

        <h2>Password</h2>
        <input type="password" placeholder='Enter Password' 
          {...register("password",{required:"Enter The Password",
        minLength:{value:4,message:"Password should be of minimum 4 digits"},
        maxLength:{value:20,message:"Password should be of maximum 20 digits"}
        })}
        />
        <br />
        <span>{errors.password?.message}</span>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
