import { Link } from 'react-router-dom'

import './Navbar.scss'

function Navbar() {
  return (
    <header>
      <nav className="nav-links">
        <Link className='link i' to="/">Inicio</Link>
        <Link className='link' to="/historia">Historia</Link>
        <Link className='link' to="/clima">Clima</Link>
        <Link className='link' to="/gobierno">Gobierno</Link>
        <Link className='link' to="/quehacer">¿Que hacer?</Link>

      </nav>
    </header>
  )
}

export default Navbar
