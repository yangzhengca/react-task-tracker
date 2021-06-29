import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks,setTasks]=useState([{
    id:1,
    text:"1sdasdasd",
    day:"Feb 5th at 2:30pm",
    reminder:true,
  },
  {
    id:2,
    text:"2sdasdasd",
    day:"Feb 5th at 4:30pm",
    reminder:true,
  },
  {
    id:3,
    text:"3sdasdasd",
    day:"Feb 6th at 2:30pm",
    reminder:true,
  },
  ])

  //Delete task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show'}
    </div>
    
  );
}

export default App;
