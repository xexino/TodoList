import { useRef } from "react/cjs/react.development";
import { useState } from "react";

const Todo = (props) => {
    

    let [title, setTitle] = useState();
    let titleRef = useRef("");
    // we are referring to input to change the value
    const submitButton = () => {
      let input_value = titleRef.current.value;
      setTitle(titleRef.current.value);
      titleRef.current.value=""
      props.addTaskTodolist(input_value)
    };
    return (
        <>
            <h1>add todo list</h1>
            <div className="input-group mb-3 mx-auto first" >
                <input 
                ref={titleRef}
                type="text" 
                className="form-control m-1 first-1" 
                placeholder="ADD to todo list 😼" />

                <div className="input-group-append">
                    <button 
                    onClick={()=>submitButton()}
                    className="btn btn-warning m-1" 
                    type="button">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Todo;