import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './LoginPage.css'
import {auth} from '../firebase/firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {useDispatch} from 'react-redux';
import {login} from '../features/user/userSlice'
function LoginPage() {
    const [formInfo,setFormInfo] = useState({
        name:'',
        email:'',
        password:'',
        imageUrl:''
    })
    const dispatch = useDispatch()
    const signInHandler = (event)=>{
        event.preventDefault()
        if(formInfo.email.length === 0){
            return alert('please entre a valid email')
        }else if(formInfo.password.length === 0){
            return alert('please entre a valid password')
        }
        signInWithEmailAndPassword(auth,formInfo.email,formInfo.password)
            // .then((userCredential)=>{
            //     const {displayName,email,photoURL} = userCredential.user;
            //     dispatch(login({name:displayName,email:email,photoURL:photoURL}))
            // })
            .catch(e=>alert(e.message))
    }

    const joinHandler = (event)=>{
        event.preventDefault();
        if(formInfo.name.length === 0 ){
            return alert('please entre a full name')
        }else if(formInfo.email.length === 0){
            return alert('please entre a valid email')
        }else if(formInfo.password.length === 0){
            return alert('please entre a valid password')
        }
        createUserWithEmailAndPassword(auth,formInfo.email,formInfo.password)
            .then((userCredential)=>{
                updateProfile(userCredential.user,{
                    displayName: formInfo.name,
                    photoURL: formInfo.imageUrl
                })
                .then(()=>{
                    const {displayName,email,photoURL} = userCredential.user
                    dispatch(login({name:displayName,email:email,photoURL:photoURL}))
                })
            })
            .catch(e=>alert(e.message))
    }
    const inputChangeHandler = (event)=>{
        const {name,value} = event.target;
        setFormInfo(prevState=>{
            return {...prevState,[name]:value};
        })
    }
    
  return (
    <div className='login-page'>
        <div className="login-page--logo-container">
            <h3>linked</h3>
            <LinkedInIcon fontSize="inherit"/>
        </div>
        <form className="login-page--form">
            <h2>Sign in</h2>
            <p>Stay updated on your professional world</p>
            <input type="text" className='login-page--input' placeholder='full name' name='name' onChange={(event)=>inputChangeHandler(event)}/>
            <input type="email" className='login-page--input' placeholder='email or phone' name='email' onChange={(event)=>inputChangeHandler(event)}/>
            <input type="password" className='login-page--input' placeholder='password' name='password' onChange={(event)=>inputChangeHandler(event)}/>
            <input type="text" className='login-page--input' placeholder='photo url' name='imageUrl' onChange={(event)=>inputChangeHandler(event)}/>
            <button className='login-page--login-btn' onClick={(event)=>signInHandler(event)}>sign in</button>
            <p className='login-page--join-paragraph'>New to LinkedIn? <button className='login-page--join-btn' onClick={(event)=>joinHandler(event)}>Join now</button></p>
        </form>
    </div>
  )
}

export default LoginPage