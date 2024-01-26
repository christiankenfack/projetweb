import React, { useRef, useState } from "react";
import "../../../style/ProjectForm.css"
import { Add as AddIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';








const ProjectForm = ({ AddProject }) => {

    const [className, setClassName] = useState("infoProjectContain")
    const [buttonValue, setButtonValue] = useState(<AddIcon sx={{ color: "white" }} />)
    const [open, setOpen] = useState(true)
    const projectTitle = useRef(null)
    const projectTime = useRef(null)
    const projectR = useRef(null)
    const projectD = useRef(null)

    const handleOpen = () => {
        setClassName("UpdateProject")
        setOpen(false)
        setButtonValue("X")


    }
    const handleClose = () => {
        setClassName("infoProjectContain")
        setOpen(true)
        setButtonValue(<AddIcon sx={{ color: "white" }} />)
    }

    const OnSubmit = (e) => {
        e.preventDefault();

        const ProjectName = projectTitle.current.value;
        const ProjectResources = projectR.current.value;
        const ProjectTime = projectTime.current.value;
        const ProjectDescription = projectD.current.value;
        const NewProject = {
            id: uuidv4(),
            name: ProjectName,
            ressources: ProjectResources,
            time: ProjectTime,
            description: ProjectDescription
        };
        AddProject(NewProject);

        projectTitle.current.value = "";
        projectR.current.value = "";
        projectTime.current.value = "";
        projectD.current.value = "";

        handleClose()

    }


    return (
        <>


            <div className="btn-create-project-contain">

                <button className="Appear-form-project " onClick={open ? handleOpen : handleClose} >
                    {buttonValue}
                </button>
            </div>

            <form className={className} onSubmit={OnSubmit}>

                <div className="infoProject">
                    <h1 className="New-project">New Project</h1>
                    <div className="detail-information">
                        <h6 className="Title-information">Nom du Projet</h6>
                        <input type="text" className="projectTitle" ref={projectTitle} required />
                        <h6 className="error">Obligatoire *</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Ressources necessaires</h6>
                        <textarea className="ressourceSelect" ref={projectR}></textarea>
                        <h6 className="error">Obligatoire *</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Estimation du temps(jours)</h6>
                        <input type="text" className="projectTime" ref={projectTime} required />
                        <h6 className="error">Obligatoire *</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Description</h6>
                        <textarea className="projectDescription" ref={projectD}></textarea>
                    </div>
                    <button className="create-new-project" type="submit"
                    >Create new project</button>
                </div>

            </form>


        </>
    )
}

export default ProjectForm