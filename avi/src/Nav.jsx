import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <nav>
                <Link to="/">Inicio 
                    <img src="/logoAVI.png" alt="AVI Logo" className="logo-img" style={{height:"50px", width: "auto"}}></img>
                </Link>
                <div className='nav-left'>
                    <Link to="/bienvenidatest">Test</Link>
                    <Link to="/programas">Programas</Link>
                    <Link to="/mapa">Mapa</Link>
                </div>
                <div className="nav-right">
                    <Link to="/login" className='btn-nav btn-login'>Login</Link>
                    <Link to="/registro" className='btn-nav btn-register'>Registro</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav