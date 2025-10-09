function Login() {

    return (
        <section className="auth-section">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>Iniciar Sesión</h1>
                    <p>Accede a tu cuenta para continuar con el test vocacional</p>
                </div>

                <form id="loginForm" className="auth-form">
                    <div className="form-group">
                        <label htmlFor="identificacion">Número de Identificación</label>
                        <input type="text" id="identificacion" name="identificacion" required />
                        <span className="error-message" id="identificacion-error"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                        <span className="error-message" id="password-error"></span>
                    </div>

                    <button type="submit" className="auth-button">Ingresar</button>
                </form>

                <div className="auth-footer">
                    <p>¿No tienes cuenta? <a href="/registro" className="loader-link">Regístrate aquí</a></p>
                </div>
            </div>
        </section>
    );
}

export default Login;