import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
        alert('Defina uma tarefa')
        return
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }  
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Tarefa</label>
            <input type='text' placeholder='Adicionar tarefa' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Dia e hora</label>
            <input type='text' placeholder='dia e hora' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Lembrete</label>
            <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
        </div>
        <input type='submit' value='Salvar a tarefa' className="btn btn-block"/>

    </form>
  )
}

export default AddTask
