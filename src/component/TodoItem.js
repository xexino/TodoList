const TodoItem = ({ title , id , delet }) => {


    
     
    return (
        <>
            <li className="border d-flex justify-content-between m-2 p-2">
                <h3>{title}</h3>
                <button
                    onClick={() => delet(id)}
                    type="button"
                    className="btn btn-danger">
                    <i className="fas fa-dumpster"></i>
                </button>
            </li>

        </>
    );
}

export default TodoItem;