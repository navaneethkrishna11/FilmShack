import React, { useState } from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

function Login() {
  const [isLogin,setLogin]=useState(true)
  return (
    <div>

      <Helmet>
        <title>
        Login
        </title>
      </Helmet>
      <Navbar/>
      <div className="containerLogin">
        <div className={`boxLogin ${isLogin?`login`:`register`}`}>
          <div className="sideLogin1">
            <center>
            <h1 style={{color:''}}>{isLogin?'LOGIN':'REGISTER'}</h1>
            </center>
            <form action="">
              {isLogin?(
                <>
              <label htmlFor="username">Username : </label>
              <input type="text" />
              <br />
              <br />
              <label htmlFor="password">Password :</label>
              <input type="password" />
              <br />
              <br />
              <center>
              <button type='submit' style={{ padding: "10px 20px", backgroundColor: "#ea445a",color:" #fff",border:"none",borderRadius: "5px",cursor:"pointer" }}>Login</button>
              </center>
              <br />
              <br />
              <p>
                Don't have an account ?{''}
                <span className='toggle'onClick={()=>setLogin(false)}>Register</span>
              </p>
              </>
              ):
              (
                <>
                 <label htmlFor="username">Name : </label>
                 <input type="text" required/>
                 <br />
                 <br />

                 <label htmlFor="email">Email : </label>
                 <input type="email" required/>
                 <br />
                 <br />

                 <label htmlFor="username">Password : </label>
                 <input type="password" required/>
                 <br />
                 <br />
                 <label htmlFor="username">Re-enter password : </label>
                 <input type="password" required />
                 <br />
                 <br />

                 <label htmlFor="dob">DOB : </label>
                 <input type='date'  required/>
                 <br />
                 <br />

                

                 <label htmlFor="dob">Phone : </label>
                 <input type='tel' required/>
                 <br />
                 <br />

                 <label htmlFor="dob">Country : </label>
                 <input type='text' required/>
                 <br />
                 <br />
                
                  <br />
                  <center>
                 <button type='submit' style={{ padding: "10px 20px", backgroundColor: "#ea445a",color:" #fff",border:"none",borderRadius: "5px",cursor:"pointer" }}>Register</button>
                 </center>
                 <br />
                 <br />
                 
                 <p>
                  Already have an account?  {' '}
                  <span className='toggle' onClick={()=>setLogin(true)}>Login</span>
                 </p>
                 



                </>
              )}

            </form>

          </div>
          <div className="sideLogin2">
          <h1 className="login-caption">
            <b>Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime</b>
           </h1>
          </div>
        </div>

      </div>
      <Footer/>
      
    </div>
  )
}

export default Login
