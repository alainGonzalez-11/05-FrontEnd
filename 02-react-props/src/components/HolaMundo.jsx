import './HolaMundo.css'
const HolaMundo = ({nombre}) => {
  return (
    <h2 className='saludo'>
      Hola Mundo - {nombre}
    </h2>
  )
}

export default HolaMundo
