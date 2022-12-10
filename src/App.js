import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        reminder: true,
        text: 'Médico',
        day: 'Feb 5th at 2:30pm'
    },
    {
        id: 2,
        reminder: true,
        text: 'Reunião de pais e mestres',
        day: 'Feb 6th at 1:30pm'
    },
    {
        id: 3,
        reminder: false,
        text: 'Ir ao supermercado',
        day: 'Feb 5th at 2:30pm'
    },
  ])

  const deleteTask = (id) => {
    console.log('exclusão', id)
  }
  return (
    <div className="cotainer">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
