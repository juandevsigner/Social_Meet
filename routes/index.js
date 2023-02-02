const express = require("express");
const router = express.Router();
const { home } = require("../controllers/homeControllers");
const {
  formCrearCuenta,
  crearNuevaCuenta,
} = require("../controllers/usuariosControllers");

module.exports = function () {
  router.get("/", home);
  router.get("/crear-cuenta", formCrearCuenta);
  router.post("/crear-cuenta", crearNuevaCuenta);
  return router;
};
