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
    // console.log('exclusão', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="cotainer">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
        'Nenhuma tarefa'}
    </div>
  );
}

export default App;
