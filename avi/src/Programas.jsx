
const Programas = () => {
  return (
    <main className="programas">
      <h2>Programas del SENA</h2>

      <div className="filters">
        <select id="nivelFiltro" className="btnnivel">
          <option value="">Todos los niveles</option>
          <option value="TECNICO">Técnico</option>
          <option value="TECNOLOGO">Tecnólogo</option>
        </select>

        <select id="areaFiltro">
          <option value="">Todas las áreas</option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Software">Software</option>
          <option value="Electrónica">Electrónica</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nivel</th>
            <th>Nombre del Programa</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody id="tablaProgramas">
        </tbody>
      </table>
    </main>
  );
};

export default Programas;