import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ list }) => {



    return (
        <>

            {list.map((taskTitle) => (
                <TodoItem title={taskTitle} />
            ))}


        </>
    );
}

export default TodoList;