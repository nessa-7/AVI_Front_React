


export default function Sidebar({ isOpen }) {
  return (
    <div
      style={{
        width: isOpen ? "200px" : "0px",
        height: "100vh",
        background: "#111",
        color: "white",
        overflow: "hidden",
        transition: "0.3s",
        padding: isOpen ? "20px" : "0px"
      }}
    >
      <h2>Menú</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Inicio</li>
        <li>Perfil</li>
        <li>Configuración</li>
      </ul>
    </div>
  );
}

/*
export default function Sidebar({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/'); // redirige al inicio
  };

  const linkClass = ({ isActive }) =>
    'menu-link' + (isActive ? ' active' : '');

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">▶</span>
        <span className="brand-text">TuApp</span>
      </div>

      <nav className="menu">
        <NavLink to="/" className={linkClass}>
          
          <span>Inicio</span>
        </NavLink>

        <NavLink to="/test-vocacional" className={linkClass}>
          
          <span>Test vocacional</span>
        </NavLink>

        <NavLink to="/programas" className={linkClass}>
          
          <span>Programas</span>
        </NavLink>

        <NavLink to="/mapa" className={linkClass}>
          
          <span>Mapa</span>
        </NavLink>

        <NavLink to="/estadisticas" className={linkClass}>
          
          <span>Estadísticas</span>
        </NavLink>
      </nav>

      <div className="bottom">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            
            <span>Cerrar sesión</span>
          </button>
        ) : (
          <span className="hint">No has iniciado sesión</span>
        )}
      </div>
    </aside>
  );
}
*/