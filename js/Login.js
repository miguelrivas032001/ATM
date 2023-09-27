// Base de datos de usuarios y contraseñas
var usuarios = [
    { usuario: 'miguel', contraseña: '123456' },
    { usuario: 'samuel', contraseña: 'gei' },
  ];
  
  // Función para verificar las credenciales del usuario
  function verificarCredenciales(usuario, contraseña) {
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].usuario === usuario && usuarios[i].contraseña === contraseña) {
        return true; // Credenciales válidas
      }
    }
    return false; // Credenciales inválidas
  }
  
  