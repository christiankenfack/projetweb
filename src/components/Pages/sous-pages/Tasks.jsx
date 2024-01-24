import React, { useState } from "react";
import SideBar from "../pages-component/SideBar";
import { Checkbox, Fab, ListItemIcon, Tooltip } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import "../../../app.css"
import { AlarmOn, DeleteForeverOutlined, RadioButtonChecked, RadioButtonUnchecked, Send } from "@mui/icons-material";




const Tasks = () => {

    const [todos, setTodos] = useState([])

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <SideBar />
            <TaskForm addTodo={(todo) => {
                setTodos((prev) => [...prev, todo]);
            }} />
            {todos.map(todo => {
                return <Todo
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    level={todo.level}
                    startDate={todo.startDate}
                    endDate={todo.endDate}
                    onDelete={() => deleteTodo(todo.id)} />;
            })}
        </div>
    )
}

export default Tasks


const TaskForm = ({ addTodo }) => {

    const OnSubmit = (event) => {
        event.preventDefault()
        /*recupere les valeurs entrees*/
        const Taskname = event.currentTarget.elements.NameValue.value;
        const Tasklevel = event.currentTarget.elements.SelectValue.value;
        const TaskDateS = event.currentTarget.elements.DateStartValue.value;
        const TaskDateE = event.currentTarget.elements.DateEndValue.value;
        addTodo({
            id: uuidv4(),
            name: Taskname,
            level: Tasklevel,
            startDate: TaskDateS,
            endDate: TaskDateE
        });/*l'objet addtodo stock les valeurs recuperees*/
    }

    return (
        <div>

            <form className="Task-contain" onSubmit={OnSubmit} AddTodo>
                <h2 className="title-task"><span className="New">New</span> Task</h2>
                <div className="name-contain">
                    <label id="Task-name">Name : </label>
                    <input id="NameValue" type="text" for="Task-name" className="Inputs-task-name" required />
                    <span className="niveau-text"><p>Level :</p></span>
                    <select name="Niveau" id="SelectValue" className="Niveau-select">
                        <option value="Facile"> Easy</option>
                        <option value="Intermediaire">intermediate</option>
                        <option value="Difficile">Advanced</option>
                    </select>

                    <label id="Date">Start date : </label>
                    <input type="date" id="DateStartValue" for="Date" className="Inputs-Date" required />
                    <label id="Date">End date : </label>
                    <input type="date" id="DateEndValue" for="Date" className="Inputs-Date" required />

                    <button className="btn-create-task" type="submit">

                        <ListItemIcon sx={{
                            color: "white",
                            display: "flex",
                            justifyContent: "center",

                        }}>
                            <Send />
                        </ListItemIcon>
                    </button>
                </div>

            </form>



        </div>
    )
}
/*Composants de la tache*/

const Todo = ({ id, name, level, startDate, endDate, onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    };
    const alert = () => {
        return (
            <div id="errorMessage"><i>Taches terminee bravo!!</i></div>
        );
    }
    return (
        <div className="Todo-contain">
            <TodoCheck />
            <div className="Data-Todo" >{name}</div>
            <div className="Data-Todo" >{level}</div>
            <div className="Data-Todo" >{startDate}</div>
            <div className="Data-Todo" >{endDate}</div>
            <Rappel />
            <Delete onClick={handleDelete} />
        </div>
    )
}

/*Composant checkbox lorsqu'on clique sur celui ci la taches disparait et une message s'affciche stipulant taches achevees*/
const TodoCheck = ({ }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        checked ? setChecked(false) : <div id="errorMessage"><i>Taches terminee bravo!!</i></div>

    };


    return (
        <Checkbox sx={{
            color: "#2f008ee6", '&.Mui-checked': {
                color: "#2f008ee6",
            }
        }}
            checked={checked}
            onChange={handleChange}
            icon={<RadioButtonUnchecked />}
            checkedIcon={<RadioButtonChecked />}
        />
    );
}

/*Composant de mise a jour des informations entrees dans la taches*/
const Rappel = () => {
    return (
        <>
            <Tooltip title="Rappel hebdomadaire"
                sx={{
                    position: "",
                    left: { xs: "calc(20% - 15px)", md: 30 },
                    marginLeft: -2,
                    marginTop: 1,
                    height: 35,
                    width: 35,
                    bgcolor: '#5e17eb48',
                    '&:hover': {
                        bgcolor: "#5E17EB"

                    }
                }}>

                <Fab color="primary" aria-label="add">
                    <AlarmOn />
                </Fab>
            </Tooltip>
        </>
    )
}

/*Compoant delete permettant de supprimer la taches*/

const Delete = ({ onClick }) => {
    return (
        <>
            <Tooltip title="Delete Task" onClick={onClick}
                sx={{
                    position: "",
                    left: { xs: "calc(20% - 15px)", md: 30 },
                    marginLeft: 2,
                    height: 35,
                    marginTop: 1,
                    width: 35,
                    bgcolor: '#5e17eb48',
                    '&:hover': {
                        bgcolor: "#5E17EB"

                    }
                }}>

                <Fab color="primary" aria-label="add">
                    <DeleteForeverOutlined />
                </Fab>

            </Tooltip>
        </>
    )
}