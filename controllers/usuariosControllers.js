const Usuarios = require("../models/Usuarios");

exports.formCrearCuenta = (req, res) => {
  res.render("crear-cuenta", {
    nombrePagina: "Crea tu cuenta",
  });
};

exports.crearNuevaCuenta = async (req, res) => {
  const usuario = req.body;
  try {
    const usuarioNuevo = await Usuarios.create(usuario);
  } catch (error) {
    console.error(error);
  }
};
