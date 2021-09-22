import TodoList from "./Todolist";
import { useRef, useState } from "react";


const AddTodo = () => {


    let [title, settitle] = useState("");
    let titleRef = useRef();
    // we are referring to input to change the value
    const addTask = () => {
        settitle(titleRef.current.value);
        titleRef.current.value = ""
        setlistTask([...listTask, title]);
    }
    
     
    const [listTask, setlistTask] = useState(["first task \u{1F313}", "Seond task!!😈"])

    return (
        <>
            <h1>ADD TODO</h1>

            <div className="input-group mb-3">
                <input
                     
                    ref={titleRef}
                    type="text"
                    className="form-control"
                    placeholder="Todo title" />
                <button
                    className="btn btn-outline-secondary"
                    type="button" ><i className="fas fa-plus-circle"
                        onClick={() => addTask()}></i>

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