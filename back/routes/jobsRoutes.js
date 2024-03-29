'use strict';

const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobsController');

router.route('/')
    .get(jobsController.getJobs);

module.exports = router;
