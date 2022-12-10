// Des-estruturação, porque é um objeto
// ( {title} )
// ...
// <h1>{title}</h1>
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = (e) => {
    console.log(e)
  }
  
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color='green' text='+' onClick={onClick}/>
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