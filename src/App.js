import "./template/template.css"
import Todo from "./component/Todo";
import TodoList from "./component/TodoList";
import { useRef, useState } from "react";


function App() {
  const [listTask, setlistTask] = useState([])
  const [listTaskBAckup, setlistTaskBAckup] = useState([])
  const filterTaskinput = useRef("")

  const addNewTask = (newTaask) => {
    if (newTaask !== "") {
      setlistTask([...listTask, newTaask])
      setlistTaskBAckup([...listTaskBAckup, newTaask])

    }
    else alert("you cannot add an empty 😈")
  }

  const delet = (idTask) => {
    if (window.confirm('Delete the item?') === false) return;
    // creation d une copie 
    let newListTask = [...listTask];
    // faire le filtre du id
    newListTask = newListTask.filter((_, index) => index !== idTask)
    // 
    setlistTask([...newListTask])
    setlistTaskBAckup([...listTaskBAckup])
    

    
  }

  const filterTaskByTitile = () =>{

    let query = filterTaskinput.current.value;
    if(query==="")  setlistTask([...listTaskBAckup])
    else{
    let newListTask = [...listTask]
    newListTask = newListTask.filter((titleTask)=>titleTask.includes(query))
    setlistTask([...newListTask])
    }
  }



  return (
    <div className="App">
      <header>
        <Todo 
        addTaskTodolist={addNewTask} 
        />
        {/* -- ADD TODO /COMPONENT -- */}
      </header>
      <hr />
      <div className="input-group d-flex justify-content-center m-1 ">
        <div className="form-outline m-1">
          <input
            ref={filterTaskinput}
            type="text"
            onKeyUp={ filterTaskByTitile}
            placeholder="search by title"
            className="form-control m-1" />

          <label className="htmlForm-label" for="form1"></label>
        </div>
        <div className="input-group-append m-1">
          <button className="btn btn-warning m-1 " type="button"><i className="fas fa-search"></i>
          </button>
        </div>

      </div>


      <TodoList
        delet={delet}
        list={listTask} />


    </div>
  );
}

export default App;
