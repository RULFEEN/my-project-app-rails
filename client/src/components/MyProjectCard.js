import React, { useState } from "react";

function MyProjectCard({ project }) {

    const [edit, setEdit] = useState(false)

    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    function handleEdit(e) {
        e.preventDefault()
        let image_url = imageUrl
        fetch(`/projects/${e.target.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, image_url, description })
        })
            .then(res => res.json())
            .then(console.log)

        setEdit(false)
    }

    function handleSetEdit() {
        setEdit(!edit)
    }

    function handleDelete(e) {
        fetch(`/projects/${e.target.id}`, {
            method: "DELETE"
        })
    }

    return (
        //space cards
        <div className="card mb-3" style={{ width: 300 + "px" }} >
            <div className="card-body xs-2 mb-3" style={{width: 300 + "px"}} >
                <h2 className="card-title text-decoration-none text-center mb-4
                " >{project.name}</h2>
                <div className="d-flex justify-content-center" >
                    <img  className="card-img-top card-img"
                    src={project.image_url} alt={project.name} width="250px" />
                </div>
                <p className="card text  mb-4 p-4 fs-6 text-center" >{project.description}</p>
                <div>
                    {project.comments ? (
                        project.comments.map(comment => {
                            return (
                                <div key={comment.id} className="card-text" >
                                    <p>{comment.opinion}</p>
                                </div>
                            )
                        }
                        )
                    ) : (
                        <div>
                            <p>Add comment</p>
                        </div>
                    )}
                </div>
            </div>

           

            {edit ? (
                <div key={project.id}>
                    <form onSubmit={handleEdit} id={project.id} >
                        <div className="form-outline mb-4" >
                            <input id="project_name" value={name} type="text" placeholder={project.name} onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" />
                            <input id="project_image_url" value={imageUrl} type="text" placeholder={project.image_url} onChange={(e) => setImageUrl(e.target.value)} className="form-control form-control-lg" />
                            <input id="project_description" value={description} type="text" placeholder={project.description} onChange={(e) => setDescription(e.target.value)} className="form-control form-control-lg" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                    </form>
                </div>
            ) : (
                <div></div>
            )}
            <br/>
            <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block mb-1 float-end" onClick={handleSetEdit} id={project.id} >Edit</button>
            <button type="submit" className="btn btn-danger btn-lg btn-block mb-1 float-start" onClick={handleDelete} id={project.id} >Delete</button>
            </div>

        </div>
    )
}

export default MyProjectCard;
