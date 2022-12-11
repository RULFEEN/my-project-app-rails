import React from "react";
import { NavLink } from "react-router-dom";
//import { ReactComponent as Logo } from "./logo1.png";
// import AboutUs from "./AboutUs";
import { ReactComponent as Logo } from "./imac-note-svgrepo-com.svg"

function NavBar({ setUser, user }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(setUser(null));
    }

    return (
      
 <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
                <Logo className="logo" /> 
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/myprojects">My Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </div>
            {user ? (

                <header>
                    <button onClick={handleLogout} className="btn btn-outline-primary" type="submit" 
                    >Logout</button></header>
                ) : (
                <div>

                </div>
                )}
        </div>
    </nav>
</React.Fragment>
/*<React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {user ? (
                <h2 className="navbar-brand">Welcome {user.username}</h2>
            ) : (
                <h2 className="navbar-brand">Please, Sign Up</h2>
            )}

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    {user ? (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/myprojects">My Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">Add Project *rem</NavLink>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">Sign In page *rem</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">Sign Up page *rem</NavLink>
                        </li>

                    )}
        
                        }
                </ul>

                {user ? (
                    <header>
                        <button onClick={handleLogout} className="btn btn-outline-primary" type="submit">Logout</button>
                    </header>
                ) : (
                    <div>
                    </div>
                )}

            </div>
        </div>
    </nav>

</React.Fragment>*/

    )
}






export default NavBar;



