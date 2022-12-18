import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
// import User from "../../../server/model/user"



  
function Login() {
  const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const routes = useRouter()

async function handleSubmit(event: React.FormEvent){
event.preventDefault();
try {
  event.preventDefault();

  const user = await axios.post("http://localhost:8080/login", {
    email,
    password,
  });
if(user) {
  routes.push('/')
  
}
} catch (error) {
  console.log(error);
}
}


    return (
      <form onSubmit={handleSubmit}>
      <section className="h-100 gradient-form">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp "
                    style={{width: '185px'}} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">We are The 3EFRIT Team</h4>
                </div>

                
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input  value={email} type="email" onChange={(e) => setEmail(e.target.value)} id="form2Example11" className="form-control"
                      placeholder="Phone number or email address" />
                    <label className="form-label" htmlFor="form2Example11">E-mail</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input  value={password} type="password" onChange={(e) => setPassword(e.target.value)} id="form2Example22" className="form-control" placeholder="Please enter your password"/>
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                      in</button>
                    {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link href='/Register'>
                    <button type="button" className="btn btn-outline-danger">Create new</button>
                    </Link>
                  </div>
                  
                

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Rania please dont tell me css ma3jebnish</h4>
                <p className="small mb-0">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>

    )
}
export default Login;