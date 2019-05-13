'use strict';

const express = require('express');
const router = express.Router();

const formationController = require('../controllers/formationController');

router.route('/')
    .get(formationController.getFormation);

module.exports = router;
