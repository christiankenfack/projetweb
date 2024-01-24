import React from "react";
import SlideBar from "../pages-component/SideBar";






const Project = () => {
    return (
        <>
            <SlideBar />
            <form className="infoProjectContain">
                <div className="infoProject">
                    <h1 className="New-project">New Project</h1>
                    <div className="detail-information">
                        <h6 className="Title-information">Nom du Projet</h6>
                        <input type="text" className="projectTitle" required />
                        <h6 className="error">Veuiller entre cette valeur !</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Ressources necessaires</h6>
                        <select className="ressourceSelect">
                            <option value="Internet">Internet</option>
                            <option value="IDE">IDE</option>
                            <option value="Cahier de charge">Cahier de charge</option>
                            <option value="Editeur de code">Editeur de codes</option>
                            <option value="Serveur">Serveur</option>
                        </select>
                        <h6 className="error">Veuiller entre cette valeur !</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Estimation du temps(jours)</h6>
                        <input type="text" className="projectTime" required />
                        <h6 className="error">Veuiller entre cette valeur !</h6>
                    </div>
                    <div className="detail-information">
                        <h6 className="Title-information">Description</h6>
                        <textarea className="projectDescription"></textarea>
                        <h6 className="error">Veuiller entre cette valeur !</h6>
                    </div>
                    <button className="create-new-project" type="submit">Create new project</button>
                </div>

            </form>


        </>
    )
}

export default Project