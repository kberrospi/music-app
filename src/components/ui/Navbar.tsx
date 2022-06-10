import { Link, useNavigate } from 'react-router-dom';
import Back from '../../assets/left-arrow.png'
import '../../styles/navbar.css'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <div>
        <button className='button-back' onClick={ () => navigate(-1) }> 
          <img className='back' src={ Back } /> 
        </button>
        <Link className='home' to={'/'}> <span className='title'> Music-App </span> </Link>

      </div>
      <Link className='home' to={'/'}> LISTA DE ARTISTAS </Link>
    </nav>
  )
}
