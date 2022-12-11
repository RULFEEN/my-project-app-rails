import React, { useState } from "react";
import MyProjectCard from "./MyProjectCard";

function MyProjects({ myProjects, user }) {
    const [add, setAdd] = useState(false)

    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    function handleAdd(e) {
        e.preventDefault()
        let user_id = user.id
        let image_url = imageUrl
        fetch(`/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id, name, image_url, description })
        })
            .then(res => res.json())
            .then(console.log)

        setAdd(false)
    }

    return (
        <React.Fragment>
            {myProjects.length > 0 ? (
                <div>
                    <h2 className="d-flex justify-content-center text-decoration-none">My Projects</h2>
                    <div className="d-flex justify-content-center text-decoration-none">
                        {myProjects ? (
                            myProjects.map(project => {
                                return <MyProjectCard  key={project.id} project={project} />
                            })
                        ) : (
                            <div>
                                <p>Add a project?</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <h2 className="d-flex justify-content-center text-decoration-none">You have no projects yet!</h2>
            )
            }
            <br />
            <div className="d-flex justify-content-center mt-5">
                {add ? (
                    <form onSubmit={handleAdd} >
                        <div className="form-outline mb-4" >
                            <input id="project_name" value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" />
                            <input id="project_image_url" value={imageUrl} type="text" placeholder="image_url" onChange={(e) => setImageUrl(e.target.value)} className="form-control form-control-lg" />
                            <input id="project_description" value={description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} className="form-control form-control-lg" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Add</button>
                    </form>
                ) : (
                    <button className="btn btn-primary" onClick={() => setAdd(true)}>Add Project</button>
                )}
            </div>
        </React.Fragment>
    )
}



export default MyProjects;
