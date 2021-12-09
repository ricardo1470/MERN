const expres = require('express');
const morgan = require('morgan');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const createError = require('http-errors');
const mongooose = require('mongoose');

const app = expres();

const port = process.env.PORT || 9000;

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(cors());
app.use(expres.json());
app.use(expres.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

app.use('/', indexRouter);

app.use(expres.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on('SIGTERM', () => {
    app.close(() => {
        console.log('Process terminated');
    });
});
