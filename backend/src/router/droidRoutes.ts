const { Router } = require('express');
const { droidController } = require('../controllers/droidController.ts');

const router = new Router();

router
  .route('/radar')
  .post(droidController);

module.exports = router;
