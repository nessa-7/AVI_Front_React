

const Registro = () => {
  return (
    <>   
      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-header">
            <h1>Crear Cuenta</h1>
            <p>Regístrate para acceder al test vocacional AVI</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="identificacion">Número de Identificación *</label>
              <input type="text" id="identificacion" name="identificacion" required />
            </div>

            <div className="form-group">
              <label htmlFor="nombreCompleto">Nombre Completo *</label>
              <input type="text" id="nombreCompleto" name="nombreCompleto" required />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico *</label>
              <input type="email" id="correo" name="correo" required />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input type="tel" id="telefono" name="telefono" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña *</label>
              <input type="password" id="password" name="password" required />
              <div className="password-requirements">
                <small>La contraseña debe tener:</small>
                <ul>
                  <li>Mínimo 8 caracteres</li>
                  <li>Al menos una letra mayúscula</li>
                  <li>Al menos un número</li>
                  <li>Al menos un carácter especial</li>
                </ul>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña *</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>

            <button type="submit" className="auth-button">Registrarse</button>
          </form>

          <div className="auth-footer">
            <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registro;
