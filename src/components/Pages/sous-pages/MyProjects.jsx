import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import SlideBar from "../pages-component/SideBar";
import "../../../app.css"
import Project from "../pages-component/Project";


const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const deleteProject = (id) => {
        setProjects(prev => prev.filter(project => project.id !== id));
    };
    return (
        <div>
            <SlideBar />
            <ProjectForm AddProject={(project) => {
                setProjects((prev) => [...prev, project]);
            }} />
            <div className="AllProject">
                {projects.map(project => {
                    return <Project
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        ressources={project.ressources}
                        time={project.time}
                        description={project.description}
                        OnDelete={() => deleteProject(project.id)} />


                })}

            </div>
        </div>
    )

}

export default MyProjects;