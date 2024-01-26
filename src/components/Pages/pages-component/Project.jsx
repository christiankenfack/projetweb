import React from "react";
import "../../../style/Project.css"
import { DeleteForever } from "@mui/icons-material";


const Project = ({ id, name, ressources, time, description, OnDelete }) => {
    const handleDelete = () => {
        OnDelete(id);
    }
    return (
        <>
            <div className="project-contain">
                <div className="project-name">
                    <p>{name}</p>
                </div>


                <div className="btn-delete">
                    <button className="Btn-afficher">ouvrir</button>
                    <button className="deleteProject" onClick={handleDelete}>
                        <DeleteForever sx={{
                            fontSize: 20, transition: 'all 0.3 ease',
                            '&:hover': {
                                color: 'white',
                                transform: 'Scale(1.03)'
                            }
                        }} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Project