export function crearSuperUsuarioAsync() {
  const superUsuario = {
    id: 1,
    nombre: "Mendo"
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(superUsuario);
    }, 1000);
  });
}
