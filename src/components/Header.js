// Des-estruturação, porque é um objeto e porque deixa os atributos explícitos.
// era...
//        const Header = (props) => {}
// ...
// <h1>{props.title}</h1>
// ...ficom assim:
//        const Header = ({ title }) => {}
// ...
// <h1>{title}</h1>
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? '-' : '+'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Acompanhamento das tarefas',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// CSS no javascript
/*
const headingStyle = {
  color: 'red',
  backgroundColor: 'black',
}*/
export default Header