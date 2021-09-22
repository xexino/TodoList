import TodoList from "./Todolist";
import { useRef, useState } from "react";


const AddTodo = () => {


     
     
 
    return (
        <>
            <h1>ADD TODO</h1>

            <div className="input-group mb-3">
                <input
                     
                     type="text"
                    className="form-control"
                    placeholder="Todo title" />
                <button
                    className="btn btn-outline-secondary"
                    type="button" ><i className="fas fa-plus-circle"></i>

                </button>
            </div>

            <hr />
            <div className="search">

                <input type="text" className="form-control ds-input input" placeholder="filter by search" />
                <div className="search-icone"><i class="fas fa-search"></i></div>
            </div>
            <div className="task">
                <TodoList list={listTask} />
            </div>
        </>
    );
}

export default AddTodo;