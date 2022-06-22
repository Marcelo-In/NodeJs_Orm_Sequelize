const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
      .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
      .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
      .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
      .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
      .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)
      .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula);

module.exports = router;