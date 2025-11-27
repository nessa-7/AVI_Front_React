import {Link} from 'react-router-dom'

function Nav(){

    const isLogged = !!localStorage.getItem("token")

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("rol")
        localStorage.removeItem("nombre")
        window.location.reload()
        window.location = "/"
    }

    return(
        <div>
            <nav>

                <Link to="/">Inicio 
                    <img src="/logoAVI.png" alt="AVI Logo" className="logo-img" style={{height:"50px", width: "auto"}}></img>
                </Link>

                {isLogged ? (

                <div className='nav-left'>
                    <Link to="/bienvenidatest">Test</Link>
                    <Link to="/programas">Programas</Link>
                    <Link to="/mapa">Mapa</Link>
                    <button onClick={logout} className='btn-nav btn-logout'>Cerrar Sesion</button>
                </div>

                ) : (
                <div className="nav-right">
                    <Link to="/login" className='btn-nav btn-login'>Login</Link>
                    <Link to="/registro" className='btn-nav btn-register'>Registro</Link>
                </div>
                )
            }
                
                

                
            </nav>
        </div>
    )
}



export default Nav