var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var formationRouter = require('./routes/formationRoutes');
var jobsRouter = require('./routes/jobsRoutes');
var projectsRouter = require('./routes/projectsRoutes');
var skillsRouter = require('./routes/skillsRoutes');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up mongoose connection
// mongoose.Promise = require('bluebird');
// mongoose.set('debug', global.gConfig.mongoDb.debug);
// mongoose.connect(global.gConfig.mongoDb.devDbUrl, { promiseLibrary: require('bluebird') })
//     .then(_ => console.log('connection succesfull'))
//     .catch(error => console.log(error));

app.use('/api/formation', formationRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);

module.exports = app;
