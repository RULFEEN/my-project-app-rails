import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser, user, setMember }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));

    navigate('/')
  }

  function signUp(e) {
    e.preventDefault();
    setMember(false);
  }

  return (


    <section className= "vh-90">
      <div className="container py-5 h-90">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>
                      <h2 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h2>
                      <div className="form-outline mb-4">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}  className ="form-control form-control-lg"/>
                      </div><br></br>
                      <div>
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className ="form-control form-control-lg"/>
                      </div>

                      <div className="pt-1 mb-4">
                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Sign in</button>
                      </div>

                      <button type="click" className="btn btn-secondary" onClick={signUp}>
                        Not a Member? Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SignIn;

