const TodoItem = ({ title }) => {
    return (
        <>
            <div className="task-item d-flex justify-content-between p-2 border m-3 ">

                <h3>{title}</h3>
                <button className="btn btn-ligh"><i className="fas fa-trash-alt"></i>
                </button>
            </div>


        </>
    );
}

export default TodoItem;