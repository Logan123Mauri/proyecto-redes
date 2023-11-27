function obtenerListaUsuarios() {
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosls'));
  if (listaUsuarios == null) {
      listaUsuarios = [
          ['1', 'Pabs', 'Monestel', 'ejemplo@gmail.com', 'ejemplo', '1987-10-12', '1'],
          ['2', 'Olman', 'Santamaría', 'olman@gmail.com', 'lolman9', '1993-04-17', '2']
      ];
  }
  return listaUsuarios;
}

function validarCredenciales(pCorreo, pContrasena) {
  var listaUsuarios = obtenerListaUsuarios();
  var bAcceso = false;
  for (var i = 0; i < listaUsuarios.length; i++) {
      if (pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]) {
          bAcceso = true;
          sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
          sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
      }
  }

  return bAcceso;
}
