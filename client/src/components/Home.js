import React, { useEffect, useState } from "react";
import Login from "./User/LogIn";

function Home({ allProjects, user, setUser }) {

    const [opinion, setOpinion] = useState("")

    useEffect(() => {
        fetch("/me")
        .then((response) => {
          if (response.ok) {
            response.json().then(setUser);
          }
        //   else {
        //     response.json().then(console.log);
        //   }
        });
    }, []);

    function handleComment(e) {
        e.preventDefault()
        let user_id = user.id
        let project_id = e.target.id
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id, project_id, opinion })
        })
        e.target.reset()
    }
    
    if (user) {
        return (


            <React.Fragment>
                <h2 className="d-flex justify-content-center text-decoration-none">Welcome, {user.username}!</h2>
                <br />
                <br/>
                {allProjects.map(project => {
                    return (
                        //dark outline
                        <div className= "d-flex justify-content-center border - right - 0 mb-5 " key={project.id} >
                        <div className="card-deck mb-3" style={{width: "30rem" }}>
                            <img src={project.image_url} className="card-img-top card-img-rounded" alt={project.name} width="250px" />
                            <div className="card-body">
                                <h3 className="card-title text-decoration-none text-center mb-4 p-3 
                                 ">{project.name} by {project.user.username}</h3>
                                <p className="card-text text-decoration-none text-center"
                                >{project.description}</p>

                                {project.comments ? (
                                    project.comments.map(comment => {
                                        return (
                                            <ul key={comment.id} className =  "list-group list-group-flush">
                                                
                                                <li className = "list-group-item">{comment.user.username} : {comment.opinion}</li>
                                            </ul>
                                        
                                        )
                                    }
                                    )
                                ) : (
                                    <ul></ul>
                                )}

                                <form onSubmit={handleComment} id={project.id} className= "mx-1 mx-md-4"  >
                                    <input type="text" id="comment" placeholder="Add comment!" value={opinion} onChange={(e) => setOpinion(e.target.value)} className="form-control form-control-lg mb-4 text-center text-decoration-none text-light bg-dark border border-light"
                                    ></input>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                                </form>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    } else {
        console.log(user);
        return <Login setUser={setUser} />;
    }
}

export default Home;
