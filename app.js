const express = require('express');

const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHanlder = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// This is called mounting router, we
// mount a router on a route.
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// all() covers all the http methods.
// * stands for everything.
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHanlder);

module.exports = app;
