import '../styles/perfil.css';



function Perfil({closeModal}) {
    // Obtén los datos del localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));
  
    if (!usuarioRegistrado) {
      // Manejo si no hay usuario registrado
      return <p>No hay información de usuario</p>;
    }
  
    return (
      <section className='card'>
            <div className='card_white'>
              <div className='c_card'>
                <p>Nombre: {usuarioRegistrado.nombre}</p>
                <p>Apellido: {usuarioRegistrado.apellido}</p>
                <p>Correo: {usuarioRegistrado.correo}</p>
              </div>
            </div>
      </section>
    );
  }
  
  export default Perfil;