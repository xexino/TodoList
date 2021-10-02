import TodoItem from "./Todoitem";
const TodoList = ({ list , delet }) => {
    


    return (
        <>
            <ul className=" mx-auto p-0 second">
                {
                    list.map((titleTask, index) => (
                        <TodoItem 
                        id={index}
                        title={titleTask}
                        delet={(idTask)=>delet(idTask)}/>
                    ))
                }
            </ul>
        </>
    );
}

export default TodoList;