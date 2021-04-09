var express = require('express');
var router = express.Router();

// routes
router.get('/recursiva', recursiva);
router.get('/iterativa', iterativa);

module.exports = router;

function executaIteratividade(m, n){
   var produtorio = 1;
   for (i = m; i<=n; i++){
      produtorio *= (i + (1/i));
   }
   return produtorio;
}

function iterativa(req, res) {
   var m = parseInt(req.query.m);
   var n = parseInt(req.query.n);
   var retorno = executaIteratividade(m, n);
   res.send(
      {
         tipo: "iterativa",
         resultado: retorno
      }
   );
}

function executaRecursividade(m, n) {
   if (m == n)
      return (n + (1/n));
   else
      return (m + (1/m)) * executaRecursividade(m+1, n);
}

function recursiva(req, res) {
   var m = parseInt(req.query.m);
   var n = parseInt(req.query.n);
   var retorno = executaRecursividade(m, n);
   res.send(
      {
         tipo: "recursiva",
         resultado: retorno
      }
   );
}
